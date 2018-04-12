function mostProfitableDepartment(department)
{
  var profit={};
  var profitable=0;
  var sale =' ';
  for(var i=0; i<department.length;i++)
  {
    var data = department[i];
    if(profit[data.department]===undefined){
      profit[data.department]=0;

    }
    profit[data.department] += data.sales
  }
  for(var outdoor in profit){
    if(profit[outdoor]>profitable){
      profitable=profit[outdoor];

    }
  }
  return sale;
}
