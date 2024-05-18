# **Group Reducer in Google Earth Engine**
In Google Earth Engine (GEE), the Group Reducer is a powerful tool used to perform statistical computations on grouped data within feature collections or tables. This functionality allows users to aggregate data based on specific groupings, such as administrative boundaries, land cover types, or any other categorical variable present in the dataset. By applying reducers to grouped data, analysts can derive valuable insights and summaries for further analysis and visualization.

### We downloaded a [dummy dataset](https://data.humdata.org/dataset/fdf0606c-8a3b-421a-b3e8-903301e5b2ff/resource/f23d4da2-e473-4960-9d94-37df92c8d044/download/bgd_admpop_adm3_2022.csv) first.Then Reduced any three column, and group division in GEE.
*   [GEE LINK](https://code.earthengine.google.com/0cd01da2196c29d437574793badc47e4)
*   [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-6/blob/main/reduce_columns.js)
*   [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-6/blob/main/reducing_columns.png)

### Using this [landcover dataset](ee.ImageCollection("MODIS/061/MCD12Q1")) ,we calculated the sum of each class of the band `LC_Type1` for Boalkhali Upazila for the year 2021.
*   [GEE LINK](https://code.earthengine.google.com/5cefdd7c1c6b91e08b05ffac4daf5030)
*   [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-6/blob/main/class_area.js)
*   [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-6/blob/main/class_area.png)

### We made a map of Chittagong district in QGIS.
*   [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-6/blob/main/Chittagong_District.png)
