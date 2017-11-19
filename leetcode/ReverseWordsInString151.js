// Note: this isn't the stupid version with all of the weird test cases from Leetcode, it's just a simple in-place reversal of a string

var reverseWords = function(str) {

  var strArr = str.split(" ");

  if(strArr.length <= 1) {
    return str;
  }

  var i = 0;
  var j = strArr.length-1;

  while(i < j) {
    var temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    i++;
    j--;
  }

  return strArr.join(" ");

}
