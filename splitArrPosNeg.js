function rearrange(arr) {
  if(!arr) {
    return null;
  }

  if(arr.length === 1) {
    return arr;
  }

  for(var i = 1; i < arr.length; i++) {
    var key = arr[i];
    if(key > 0) {
      continue;
    }

    var j = i-1;
    while(j >= 0 && arr[j] > 0) {
      arr[j+1] = arr[j];
      j = j-1;
    }
    arr[j+1] = key;
  }
  return arr;
}



// let sortArr = (arr) => {
//
//   var negs = [];
//   var pos = [];
//
//   for(let i = 0; i < arr.length; i++) {
//
//     if(arr[i] > 0) {
//       pos.push(arr[i]);
//     } else if(arr[i] < 0) {
//       negs.push(arr[i]);
//     } else if(arr[i] === 0) {
//       pos.unshift(arr[i]);
//     }
//
//   }
//
//   for(let j = 0; j < pos.length; j++) {
//     negs.push(pos[j]);
//   }
//
//   return negs;
//
// };
//
// sortArr([1, -2, -3, -4, 5, -6, 7, -8, 9, -10, -11, -12, 0, 20]);

// ==> [ -2, -3, -4, -6, -8, -10, -11, -12, 0, 1, 5, 7, 9, 20 ]
