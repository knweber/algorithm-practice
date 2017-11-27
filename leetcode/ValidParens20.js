var map = {
  "(" : ")",
  "{" : "}",
  "[" : "]"
}

var isValid = function(s) {
  var stack = [];

  for(var i = 0; i < s.length; i++) {
    var elem = s[i];
    if(map[elem]) {  // if the current element is an 'opener'
      stack.push(map[elem]); // push the corresponding 'closer' onto the stack
    } else {  // if the current element is NOT an 'opener'
      if(elem !== stack.pop()) { // if the current element is NOT equal to the last value added to the stack
        return false;
      }
      // if the element is equal to the value popped off the stack, then it is a valid closer
    }
  }
  return stack.length === 0; // if length is 0, everything has been popped off (i.e. all openers have closers) --> isValid
}
