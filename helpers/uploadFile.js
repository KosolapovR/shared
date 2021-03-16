import endpoints from '../api/endpoints';
import { token } from './index';


/**
* Функция для загрузки файлов на service-buckets
*
* @param {object} file - Файл
* @param {object} callbacks - Объект с колбэками:
*    - sendCallback колбэк, который вызывается по завершению загрузки файла
* @param {string} bucketName Название Корзины (avatar/chat/payment/users...)
* @returns {string} Возвращает объект s3bucket
 */

export default async (file, { sendCallback } = {}, bucketName) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(endpoints.getUploadingBucketUrl(bucketName), {
    body: formData,
    method: 'POST',
    headers: {
      Authorization: token.getToken(),
    },
  });

  const data = await response.json();

  return sendCallback(data);
};
