// Подключение необходмых модулей
const fs = require("fs");
const path = require("path");
const filePath = path.join(process.cwd(), "data.txt");
const filePath2 = path.join(process.cwd(), "data_s.txt");
const { promises: fsPromises } = require("fs");

// Главная функция. Читаем и изменяем файл
async function readAndTransformFile(filePath) {
  try {
    const randomArr = [];
    const data = await fsPromises.readFile(filePath, "utf8");
    let sort = sepearateArrays(data);
    let sort2 = sepearateElements(sort);
    let sort3 = unique(sort2);
    return sort3;
  } catch (err) {
    console.error(err);
  }
}
readAndTransformFile(filePath);

// Разделяет элементы
function sepearateArrays(arr) {
  let arr1 = [];
  arr1 = arr.split(" ");
  let result = [].concat.apply([], arr1);
  return result;
}
// Разделяет элементы на отдельные части
function sepearateElements(arr) {
  let tempArr = [];
  let tempArr1 = [];
  tempArr = arr.join().split(",");
  for (let i = 0; i < tempArr.length; i++) {
    let a;
    a = tempArr[i].replace(/[\D]+/g, "");
    tempArr1.push(a);
  }
  return tempArr1;
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
readAndTransformFile(filePath).then((data) => {
  console.log(data);
});

// Выводим уникальные значения из 2 файла
readAndTransformFile(filePath2).then((data) => {
  console.log(data);
});
