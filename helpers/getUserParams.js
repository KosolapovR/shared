/**
* Функция, которая возвращает query url params для эндпойнта /user
*
* Информация об эндпойнте:
* GET /user
* - jwt-поинт, получает полную инфу о текущем юзере.
*
* GET /user?type=extended
*  - jwt-поинт, получает неполную инфу + userInfo по юзеру
*
* GET /user/:data?by=(username | id)
*  - non-jwt-поинт, получает неполную инфу по юзеру.
* Пример: GET /user/vertvvv?by=username или GET /user/5c9e04da6217bac9d02b7e07?by=id
*
* GET  /user/:data?by=...&type=extended
*  - получает неполную инфу + userInfo по юзеру
*
* @param {Object} body - Объект с параметрами, которые нужно преобразовать в нужный вид
*
* @returns {String} Число, сокращенное до указанного количества знаков после запятой
 */

export default (body) => {
  if (typeof body !== 'object') {
    return '';
  }

  let result = '';

  if (body.username) {
    result = `/${body.username}?by=username`;
  }

  if (body.id) {
    result = `/${body.id}?by=id`;
  }

  if (body.extended && result) {
    result = `${result}&type=extended`;
  }

  return result;
};
