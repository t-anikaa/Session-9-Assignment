// ** [4,5,7,8,,9] Convert the list into a GEE List object. Apply the map method and 
// multiply the value of each element of the list by 4. Finally print the multiplied list. 
// Upload the GEE code link in your github repo. Submit your repo link.


var list = [4,5,7,8,9];

//Converting the list into a GEE List object:
var geeList = ee.List(list);
print(geeList);

// Applying the map method and multiplying the value of each element of the list by 4:
var multipliedList = geeList.map(function(num){
  var number = ee.Number(num);
  return number.multiply(4);
});

print(multipliedList);