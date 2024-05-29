# **Exploring Group Reducers in Google Earth Engine**

---


Google Earth Engine (GEE) is a powerful platform for environmental data analysis and geospatial processing. One of the key features of GEE is its ability to perform grouped reductions, which are essential for zonal statistics and spatial analysis. A group reducer in GEE allows users to aggregate data within zones defined by an image or feature collection. This functionality is crucial for tasks such as calculating the total population within different administrative areas or assessing land cover changes within specific ecological zones.We did some homework on this topic and the results are ahown below:

### We downloaded a [dummy dataset](https://data.humdata.org/dataset/fdf0606c-8a3b-421a-b3e8-903301e5b2ff/resource/f23d4da2-e473-4960-9d94-37df92c8d044/download/bgd_admpop_adm3_2022.csv) first.Then Reduced any three column, and did group division in GEE.
*   [GEE LINK](https://code.earthengine.google.com/0cd01da2196c29d437574793badc47e4)
*   [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-6/blob/main/reduce_columns.js)
*   [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-6/blob/main/reducing_columns.png)


### Using this [landcover dataset](ee.ImageCollection("MODIS/061/MCD12Q1")) ,we calculated the sum of each class of the band `LC_Type1` for Boalkhali Upazila for the year 2021.
*   [GEE LINK](https://code.earthengine.google.com/5cefdd7c1c6b91e08b05ffac4daf5030)
*   [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-6/blob/main/class_area.js)
*   [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-6/blob/main/class_area.png)


### We made a map of Chittagong district showing upazila in QGIS.
*   [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-6/blob/main/Chittagong_District.png)
