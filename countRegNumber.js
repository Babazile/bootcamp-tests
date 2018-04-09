function countRegNumber(regNo){
  return regNo.split(',').length;
  var regCount = countRegNumber()
  assert.equal(regCount('CA 182736,CY 523519,CJ 812328'), 3);
}
