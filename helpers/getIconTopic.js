import fireIcon from '../assets/img/hot.svg';
import lockIcon from '../assets/img/lock-black.svg';
import pinIcon from '../assets/img/shape.svg';
import topicBlueIcon from '../assets/img/forum-icon1.svg';

/**
 * Функция для получения картинки
 *
 * @param isClosed {Boolean} Параметр для определения картинки
 * @param isFixed {Boolean} Параметр для определения картинки
 *
 * @return Возвращает картинку
 */
export default (isClosed, isFixed) => {
  if (isClosed) {
    return lockIcon;
  }
  if (isFixed) {
    return pinIcon;
  }
  return topicBlueIcon;
};
