var countcolumns = 1;
for (var i = 0; i < 5; i++) {
  var row = '';
  for (var j = 0; j < 5; j++) {
    row += countcolumns + " "; 
    countcolumns++;
  }
  console.log(row)
}
