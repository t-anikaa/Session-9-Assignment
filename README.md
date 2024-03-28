# Session-9-Assignment
**Question 1:** In Google Earth Engine (GEE), I created a dictionary object named "dict", containing key-value pairs including 'name', 'hobby', and 'numList'. Subsequently, I extracted the 'numList' from the dictionary using the 'get()' method and printed it. Then, I converted the 'numList' to an Earth Engine List object by using 'ee.List' and applied the 'sum() reducer' to calculate the sum of all numbers within the list. Finally, I printed the sum. To make the code accessible and shareable, I uploaded it to a GitHub repository. Here is the GEE code link & GitHub repository link.

* [GEE Code link](https://code.earthengine.google.com/87be304e6deb05380ced92dfd0e0be26)
* [Code file link](https://github.com/t-anikaa/Session-9-Assignment/blob/main/Q%20%26%20A%20(1).js)  

**Question 2:** Firstly, I started with a list [4, 5, 7, 8, , 9] containing numeric values. Then, I converted this list into a Google Earth Engine (GEE) List object using the 'ee.List()'. Following that, I applied the 'map()' method on the GEE List to repeat over each element. Inside the mapping function, each element is multiplied by 4. Finally, I printed the resulting multiplied list. To make the code accessible and shareable, I uploaded it to a GitHub repository. Here is the GEE code link & GitHub repository link.

*   [GEE Code link](https://code.earthengine.google.com/f0030ea6ebd4ccca0484c16f32b834ef)
*   [Code file link](https://github.com/t-anikaa/Session-9-Assignment/blob/main/Q%20%26%20A%20(2).js)

**Question 3:** Firstly, I imported the upazila boundary shapefile in Goggle Earth ENGINE. Next, I filtered out the my desired upazila (Teknaf) using 'ee.Filter.eq'. Then, I calculated its area and perimeter with 'geometry().area()' and 'geometry().perimeter()' functions, respectively. Finally, I visualized the upazila boundary on the map using 'Map.addLayer()' and centered the upazila map on the GEE map with 'Map.centerObject()'. The screenshot of the map was taken for submission which is attached here, and the GEE code was uploaded to a GitHub repository. Here is the GEE code link & GitHub repository link.


*   [GEE Code link](https://code.earthengine.google.com/faea8e19d09aef13896f55c861930321)
*   [Code file link](https://github.com/t-anikaa/Session-9-Assignment/tree/main/Q%20%26%20A%20(3))

>Image: 
![Q   A (3)](https://github.com/t-anikaa/Session-9-Assignment/assets/161161157/4d0570f6-4336-4bf7-9fd7-38641653114e)
