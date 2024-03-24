```//** {
//   "name":"Your_name",
//   "hobby":"reading",
//   "numList":[2,3,4,5,6,7,9]
// }
// Convert above key-value pair into a Dictionary object. Get the numList from the dictionary.
// Apply reducer to the list and print the sum of the numList. 
// Upload the GEE code link in your github repo. Submit your repo link


//Converting the key-value pair into Dictionary object:
var dict = ee.Dictionary({
    "name":"Your_name",
    "hobby":"reading",
    "numList":[2,3,4,5,6,7,9]
  });
  
  //Getting numList from the dictionary:
  print(dict.get("numList"));
  
  //Applying reducer to the list & printing the sum of the numList:
  var numList = ee.List(dict.get("numList"));
  var sumNum = numList.reduce(ee.Reducer.sum());
  print(sumNum);
