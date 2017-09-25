let binSearch = (arr, value, left, right) => {
  if(!right) {
    right = arr.length-1;
  }
  if(left > right) {
    return -1;
  }
  var mid = Math.floor((right + left)/2);
  if(arr[mid] === value) {
    return mid;
  } else if(arr[mid] > value) {
    return binSearch(arr, value, left, mid-1);
  } else {
    return binSearch(arr, value, mid+1, right)
  }
};
