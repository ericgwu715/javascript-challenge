// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn");

submit.on("click", function() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);

// Append Data
    tbody.text('');
    filteredData.forEach(record => {
        var row = tbody.append('tr');
        Object.entries(record).forEach(([key, value]) => {
            row.append('td').text(value);
});
});
});