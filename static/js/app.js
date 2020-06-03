// Get data from data.js
var filteredTable = data;

// global variables
var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn");

// onload of the page, populate the report
filteredTable.forEach(function(onloadshow) {
    var row = tbody.append("tr");
    Object.entries(onloadshow).forEach(function([key, value]){
        var cell = tbody.append("td");
        cell.text(value);
    });
});


submit.on("click", function() {
    //reset the html on button click
    tbody.html("")
    d3.event.preventDefault();

    //if all fields are empty, return the entire dataset
    filteredData = filteredTable;
    //get the input data
    var inputDateValue = d3.select("#datetime").property("value");
    var inputCityValue = d3.select("#city").property("value");
    var inputStateValue = d3.select("#state").property("value");
    var inputCountryValue = d3.select("#country").property("value");

    //if date is not empty, then apply the filter
    if (inputDateValue != "")
    {
        filteredData = filteredTable.filter(function(address) 
        {
        var addressDate = address.datetime; 
        return addressDate === inputDateValue;
        });
    }
    else {filteredData};

    //if country is not empty, then apply the filter
    if(inputCountryValue != "")
    {
        filteredData = filteredData.filter(function(address)
        {
            var addressCountry = address.country;
            return addressCountry === inputCountryValue;
        });
    }
    else{filteredData};

        
    //if state is not empty, then apply the filter
    if(inputStateValue != "")
    {
        filteredData = filteredTable.filter(function(address)
        {
            var addressState = address.state;
            return addressState === inputStateValue;
        });
    }
    else{filteredData};

    //if city is not empty, then apply the filter    
    if(inputCityValue != "")
    {
        filteredData = filteredTable.filter(function(address)
        {
            var addressCity = address.city;
            return addressCity === inputCityValue;
        });
    }
    else{filteredData};

    // populate the filtered report
    filteredData.forEach(function(filteredReport) {
        var row = tbody.append("tr");
        Object.entries(filteredReport).forEach(function([key, value]){
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});