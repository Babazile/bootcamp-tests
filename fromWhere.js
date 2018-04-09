function fromWhere(regNoString){
  var regNo = regNoString.split(',');
  var allPaarl = [];
  console.log(regNo);

  for (var k = 0; k < regNo.length ; k++){
  	if (regNo[k].trim().startsWith("CJ")){

      allPaarl.push(regNo[k]);
    }
     //return allPaarl.length;
  }
    console.log(regNo);

  return allPaarl.length;
}
