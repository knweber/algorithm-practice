var map = {
  "(" : ")",
  "{" : "}",
  "[" : "]"
}

var isValid = function(s) {
  var stack = [];

  for(var i = 0; i < s.length; i++) {
    var elem = s[i];
    if(map[elem]) {
      stack.push(map[elem]);
    } else {
      if(elem !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
