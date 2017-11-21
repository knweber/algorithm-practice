var lengthOfLongestSubstr = function(s) {
  var len = s.length;

  if(len <= 1) {
    return len;
  }

  var max = 0;
  var i = 0;
  var tempStr = '';

  while(i < len) {
    var curr = s[i];
    var index = tempStr.indexOf(curr);

    if(index === -1) {
      i++;
      tempStr += curr;
      max = Math.max(max, tempStr.length);
    } else {
      tempStr = tempStr.slice(index+1);
    }
  }
  return max;
}
