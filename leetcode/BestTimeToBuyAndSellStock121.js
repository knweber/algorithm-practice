var maxProfit = function(prices) {
  var highestProfit = 0;
  var min = prices[0];
  for(var i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    highestProfit = Math.max(highestProfit, prices[i]-min);
  }
  return highestProfit;
}
