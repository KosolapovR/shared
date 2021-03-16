import endpoints from '../api/endpoints';
import { token } from './index';

const uploadFileIntoBucket = async ({ file, bucketName = 'users' }) => {
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

  return data;
};

export default uploadFileIntoBucket;
