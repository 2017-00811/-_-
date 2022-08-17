// Подключение необходмых модулей
const fs = require("fs");
const path = require("path");
const filePath = path.join(process.cwd(), "data.txt");
const filePath2 = path.join(process.cwd(), "data_s.txt");
const { promises: fsPromises } = require("fs");

// Главная функция. Читаем и изменяем файл
async function readAndTransformFile(filePath) {
  try {
    const data = await fsPromises.readFile(filePath, "utf8");
    let separatedElementsArr = separateElements(data);
    let uniqueElementsArray = unique(separatedElementsArr);
    return uniqueElementsArray;
  } catch (err) {
    console.error(err);
  }
}
readAndTransformFile(filePath);

// Разделяет элементы
function separateElements(arr) {
  let arr1 = [];
  let tempArr = [];
  arr1 = arr.split(" ");
  let result = [].concat.apply([], arr1).join().split(",");
  for (let i = 0; i < result.length; i++) {
    let a;
    a = result[i].replace(/[\D]+/g, "");
    tempArr.push(a);
  }
  return tempArr;
}
// Оставляет уникальные значения
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

// Выводим уникальные значения из 1 файла
readAndTransformFile(filePath)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));

// Выводим уникальные значения из 2 файла
readAndTransformFile(filePath2)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));
