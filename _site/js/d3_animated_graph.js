

function initiate_animation(position){

  var duration = 4000
  var lines = svg.selectAll("line");
  lines.transition("move")
        .attr("x1", function(d) {
            var index = d[0];
            var pos = position[index];
            return pos[0]
        })
        .attr("y1", function(d) {
            var index = d[0];
            var pos = position[index]
            return pos[1]
        })
        .attr("x2", function(d) {
            var index = d[1];
            var pos = position[index]
            return pos[0]
        })
        .attr("y2", function(d) {
            var index = d[1];
            var pos = position[index]
            return pos[1]
        })
      .duration(duration);
}


var parent = d3.select("body")
            .select("#d3graphparent");

var element = parent.node();
var w = element.getBoundingClientRect().width;
var h = element.getBoundingClientRect().height;

var el = d3.select("body")
            .select("#d3graph");


var svg = el.append("svg")
            .attr("width", w)
            .attr("height", h);


var dataset = [];      
var n_nodes = w*h/2000;
if (n_nodes<60){n_nodes = 60}
else if (n_nodes>300){n_nodes = 300};
console.log(n_nodes);
for (var i = 0; i < n_nodes; i++) {           
    var x = Math.random() * w;  
    var y = Math.random() * h;  
    dataset.push([x,y]);        
}

var edges = []
for (var i = 0; i < dataset.length; i++) {
    var pos1 = dataset[i];
    for (var j = i+1; j < dataset.length; j++) {
        var pos2 = dataset[j];
        if (((pos1[0]-pos2[0])**2+(pos1[1]-pos2[1])**2)**(0.5)<Math.max(50,w*0.04)){
            edges.push([i,j])
        }

    }
}              


var dt = 100.0;
var linesSVG = svg.selectAll("line")
   .data(edges)
   .enter()
   .append("line")
    .attr("x1", function(d) {
        var index = d[0];
        var pos = dataset[index];
        return pos[0]+(Math.random()-0.5)*dt
    })
    .attr("y1", function(d) {
        var index = d[0];
        var pos = dataset[index]
        return pos[1]+(Math.random()-0.5)*dt
    })
    .attr("x2", function(d) {
        var index = d[1];
        var pos = dataset[index]
        return pos[0]+(Math.random()-0.5)*dt
    })
    .attr("y2", function(d) {
        var index = d[1];
        var pos = dataset[index]
        return pos[1]+(Math.random()-0.5)*dt
    })
    .attr("stroke-width", 2)
    .style("opacity", function(d){
        return Math.random()*0.2;
    })
    .attr("stroke", "#B9FDFF");


  initiate_animation(dataset);