// at first,imported a dummy dataset as table
print(table)

var reducedVal=table.reduceColumns({
  selectors:["F_TL","M_TL","T_TL","ADM1_NAME"],
  reducer:ee.Reducer.sum().repeat(3).group({
  groupField:3,
  groupName:"Division"}),
})
print(reducedVal)