// from data.js
var tableData = data;

d3.select("tbody").html("");

// Display table with all data
var tbody = d3.select("tbody");
tableData.forEach((ufosighting) => {
    var row = tbody.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(ufosightingf => ufosightingf.datetime === inputValue);

    console.log(filteredData);

    var tbody = d3.select("tbody");

// clear table
    var cleartable = tbody.selectAll('tr');
    cleartable.remove();

// fill table with rows from filtered data
    filteredData.forEach((ufosightingt) => {
    var row = tbody.append("tr");
    Object.entries(ufosightingt).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
    });
};
