import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { Map } from 'immutable';

/**
 *
 * @param id {String}
 * @param imageLink {String}
 * @param successCallback {Function}
 */
export default ({
  id,
  imageLink,
  successCallback,
} = {}) => requestAsync({
  url: endpoints.getMarkStoryAsViewedUrl(id),
  queryKey: endpoints.getMarkStoryAsViewedUrl(),
  body: {
    imageLink,
  },
  meta: {
    authToken: true,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    story: (prevEntities = Map()) => {
      // ищем измененную стори
      const prevKey = prevEntities.findKey(story => story.get('id') === id);
      if (!prevKey) {
        return prevEntities;
      }

      // ищем измененную картинку в стори
      const prevImageIndex = prevEntities.getIn([prevKey, 'images'])
        .findIndex(item => item.get('link') === imageLink);
      if (!prevImageIndex && prevImageIndex !== 0) {
        return prevEntities;
      }

      // обновляем поле "просмотрена"
      let newEntities = prevEntities.updateIn(
        [prevKey, 'images', prevImageIndex, 'isViewed'],
        () => true,
      );

      // если все картинки в новости просмотрены, всей новости ставим "просмотрена"
      if (
        newEntities.getIn([prevKey, 'images'])
          .every(image => image.get('isViewed'))
      ) {
        newEntities = prevEntities.updateIn([prevKey, 'isViewedAll'], () => true);
      }

      return newEntities;
    },
  },
});
