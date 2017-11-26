// repeating characters are ok, i.e. lcs("aaa","baa") will return "aa"

function lcs(str1, str2) {
  if(!str1.length || !str2.length) {
    return "";
  }
  var solution = [];
  str1 = str1.split("");
  str2 = str2.split("");
  for(var i = 0; i < str2.length; i++) {
    for(var j = 0; j < str1.length; j++) {
      if(str2[i] === str1[j]) {
        solution.push(str1[j]);
        str1 = str1.slice(j+1);
        break;
      }
    }
  }
  return solution.join("");
}

// lcs("aba","cddddadb") ==> "ab"
