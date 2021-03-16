/**
 *
 * @param course string | float | integer
 * @return number
 */
export default (course) => {
  if (!parseFloat(course)) return course;

  const parsedFloat = parseFloat(course);

  if (Number.isInteger(parsedFloat)) {
    return 1 / parsedFloat;
  }


  // для чисел с точкой, получаем кол-во знаков после запятой
  const n = parsedFloat.toString().split('.')[1].length;

  const growFactor = 10 ** n;

  return parseFloat((growFactor / (growFactor * parsedFloat)).toFixed(10));
};
