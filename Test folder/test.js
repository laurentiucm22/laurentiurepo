let arr = [
  { name: "Laurentiu", lastName: "Costachescu", age: 27 },
  { name: "Andrei", lastName: "Silva", age: 26 },
  { name: "Coco", lastName: "Channel", age: 100 },
];

console.log(arr);

let newArr = arr.find((el) => {
  return el.age > 20;
});

let arr2 = arr.filter((el) => {
  return el.age < 100;
});
console.log(arr2);
