// ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

const array = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];
const array2 = array.map((item) => `${item.name} ${item.surname}`);
console.log(array2);
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
