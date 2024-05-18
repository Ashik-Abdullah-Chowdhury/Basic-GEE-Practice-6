//at first import administrative boundary of BD
var upzla=table.filter(ee.Filter.eq("ADM3_EN","Boalkhali")).geometry()
print(upzla)

var imgC=ee.ImageCollection("MODIS/061/MCD12Q1").filterDate("2021-01-01","2021-01-31").first().clip(upzla).select("LC_Type1")
print(imgC)   
Map.centerObject(imgC)
Map.addLayer(imgC,{min:4,max:17,palette:["#ff250b","#01ff34","#0008ff"]},"Boalkhali")

var imgA=ee.Image.pixelArea().addBands(imgC)
print(imgA)

var classArea=imgA.reduceRegion({
  geometry:upzla,
  scale:500,
  reducer:ee.Reducer.sum().group({
    groupField:1,
    groupName:"Class"
  })
})
print(classArea)