function squareNumber(num) {
  //   const result = [];
  //   result.push(num * num);
  return num * num;
}

squareNumber(5);

const array = [1, 2, 3, 4, 5, 6];

function sqaure(arr, cb) {
  const newArr = arr.map((item) => {
    // cb(item);
    return cb(item);
  });
  console.log(newArr);
}
sqaure(array, squareNumber); // return [1,4,9,16,25]
