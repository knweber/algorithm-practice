var coinChange = function(coins, amount) {
  var i = 0;
  var arr = [];

  while(i <= amount) {
    arr.push(Number.MAX_VALUE);
    i++;
  }

  arr[0] = 0;

  for(var j = 0; j < coins.length; j++) {
    for(var k = coins[j]; k <= amount; k++) {
      arr[k] = Math.min(arr[k], arr[k - coins[j]] + 1);
    }
  }

  if(arr[amount] === Number.MAX_VALUE) {
    return -1;
  } else {
    return arr[amount];
  }
}
