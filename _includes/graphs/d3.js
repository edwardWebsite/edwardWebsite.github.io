

// Set the dimensions of the canvas / graph
var margin = {top: 30, right: 20, bottom: 30, left: 50},
    width = 800 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;
var r = 1.0;

// Adds the svg canvas
var svg = d3.select("d3cover")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

var lineFunction = d3.line()
                         .x(function(d) { return d.i1; })
                          .y(function(d) { return d.j2; });

var dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
                14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
                24, 18, 25, 9, 3 ];
                
d3.select("body").selectAll("d3cover")
    .data(dataset)  // <-- The answer is here!
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
        var barHeight = d * 5;
        return barHeight + "px";
    });

// // Get the data
// d3.csv("./networks/test_width400_height400.csv", function(error, data) {
//     data.forEach(function(d) {

//         svg.append("line")
//             .attr("x1", d.i1/r)
//             .attr("y1", d.j1/r)
//             .attr("x2", d.i2/r)
//             .attr("y2", d.j2/r)
//             .attr("stroke-width", 1.0)
//             .attr("stroke", "rgb("+d.r+", "+d.g+", "+d.b+")");


//     });

//     // for (var i = data.length - 1; i >= 0; i--) {
//     //     svg.append("path")
//     //     .attr("class", "line")
//     //     .attr("d", lineFunction(data[i], data[]));
//     // }
//     // Scale the range of the data
//     // x.domain([0,800]);
//     // y.domain([0,800]);

//     // Add the valueline path.
//     // svg.append("path")
//     //     .attr("class", "line")
//     //     .attr("d", lineFunction(data));


// });

