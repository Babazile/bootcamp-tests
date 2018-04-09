function totalPhoneBill(bills){
  var cost = bills.split(', ');
  var call = [];
  var sms = [];
  console.log(cost);
  for (var i =0; i< cost.length; i++){
    if (cost[i] == "call"){
   call.push(cost[i]);
 }
    else if (cost[i].trim() == "sms"){
      sms.push(cost[i]);
  }
  }

    var callTotal = call.length*2.75;
    var smsTotal = sms.length*0.65;
    var Total = callTotal + smsTotal;
    console.log(Total);
    return "R" + Total.toFixed(2);
  }
