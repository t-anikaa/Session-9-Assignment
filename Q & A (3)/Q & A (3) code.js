// **Upload upazila boundary shape file of Bangladesh to GEE asset tab. Filter out your desired
// upazila, and print the area, and perimeter of your upazila. Finally, show your upazila in 
// the map. Take a screenshot of the map. Upload the screenshot, GEE code link in your github
// repo. Submit your repo link. 


var roi = ee.FeatureCollection("projects/ee-atahsinhaque20/assets/BGD_adm3");

// Filtering out desired upazila:
var myRegion = roi.filter(ee.Filter.eq("NAME_3", "Teknaf"));
print(myRegion);

// Printing the area of desired upazila:
var myRegionArea = myRegion.filter(ee.Filter.eq("NAME_3", "Teknaf")).geometry().area();
print(myRegionArea);

// printing the perimeter of desired upazila:
var myRegionPerimeter = roi.filter(ee.Filter.eq("NAME_3", "Teknaf")).geometry().perimeter();
print(myRegionPerimeter);

// Showing on the map:
Map.addLayer(myRegion);
Map.centerObject(myRegion)