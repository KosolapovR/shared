import { isImmutable } from 'immutable';
import { saveAs } from 'file-saver';

/*
* Функция, для скачивания данных
*
* @param {array} data - данные, которые нужно скачать
* @param {string} name - имя файла в который сохраняем данные
*
* @returns {} - функция ничего не возвращает
 */

export default (data, name) => {
  let blobObject = isImmutable(data) ? data.toJS() : data;
  if (Array.isArray(blobObject)) {
    blobObject = new Blob([blobObject.join('\n')], { type: 'text/plain;charset=utf-8' });
  }

  try {
    saveAs(blobObject, name);
  } catch (error) {
    console.error(error);
  }
};
