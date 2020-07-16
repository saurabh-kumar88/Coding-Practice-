exports.myDateTime = function(){
  today = new Date();
  var date = today.toLocaleString('en-us', {month : '2-digit'});
  return today;
}
