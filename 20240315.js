/**
 * 2024-03-15 每日一题
 * @param {*} string 
 * @param {*} size 
 * @returns 
 */
// 请编写一个函数，可以将一个任意长度的字符串按照指定大小进行分割，并将分割后的字符串存储在一个数组中返回
function splitString(string, size) {
  let result = [];
  console.log(string.length, '9---');
  for(let i = 0; i < string.length; i += size) {
    result.push(string.slice(i, i + size));
  }

  return result;
}

const str = splitString('werqw23412342', 3);
console.log(str, 'str ---- ');