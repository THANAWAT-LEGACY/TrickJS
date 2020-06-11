const _ = require('lodash');


// chunk จับกลุ่ม array ตามจำนวนที่ระบุ      
let chunk = ['a', 'b', 'c', 'd'];

const chunk_ex1 = _.chunk(chunk, 2);
const chunk_ex2 = _.chunk(chunk, 3)
console.log(chunk)
console.log(chunk_ex1)
console.log(chunk_ex2)

//Compact : จะลบข้อมูลที่เป็น  false, null, 0, "", undefined, and NaN  ออกจาก Array
let compact = [0, 1, false, 2, '', 3];
const compact_ex1 = _.compact(compact);
console.log(compact);
console.log(compact_ex1);

// Concat สร้างอาร์เรย์ที่ต่อกันใหม่กับอาร์เรย์ (ลบ[]array ออก)
const concat_array = [1];
const concat_other = _.concat(concat_array, 2, [3], [[4]]);
console.log(concat_other)


// difference เปรียบเทียบ arr ชุดที่ 1 กับ 2 return ข้อมุลที่ไม่ซ้ำ
let dif1 = [2, 4, 6, 8, 10];
let dif2 = [1, 2, 3, 4, 5];

const difex1 = _.difference(dif1, dif2);
console.log(difex1);

// differenceBy  เปรียบเทียบ arr โดยมีเงื่อนไข  (arr1,arr2,condition) return ข้อมุลที่ไม่ซ้ำ
console.log(_.differenceBy([1.2, 1.7, 2.1, 2.6, 3.1], [2.2, 3.5, 4.4], Math.floor)) //เงื่อนไข : ปัดเศษจำนวนเต็ม
console.log(_.differenceBy([{ 'x': 2 }, { 'x': 1 }, { 'y': 2 }], [{ 'x': 1 }, { 'y': 2 }], 'x')) //เงื่อนไข : ปัดเศษจำนวนเต็ม

// drop ลบข้อมุลใน arr โดยระบุจำนวนที่จะลบ (เริ่มจากตัวแรก)  ถ้าไม่ระบุจำนวน จะลบข้อมุลตัวแรก 1 ตัว
console.log(_.drop([1, 2, 3]))
console.log(_.drop([5, 9, 3, 4, 8, 7, 2, 5, 3], 6))
console.log(_.drop([1, 2, 3, 4, 5, 6, 7, 8, 9], 6))
console.log(_.drop([1, 2, 3, 4, 5, 6, 7, 8, 9], 0))

// dropRight
console.log(_.dropRight([1, 2, 3]))
console.log(_.dropRight([5, 9, 3, 4, 8, 7, 2, 5, 3], 6))
console.log(_.dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9], 6))
console.log(_.dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9], 0))

// _.fill(array, value, [start=0], [end=array.length])

const array_fill = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const array_fill2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

_.fill(array_fill, '*', 2, 5)
console.log(array_fill) // เริ่มต้นแทนที่ตำแหน่งที่ 2 สินสุดที่ 5 (ไม่นับ 5)

_.fill(array_fill2, 'a')
console.log(array_fill2)

// findIndex