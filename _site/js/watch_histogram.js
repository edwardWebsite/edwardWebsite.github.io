// histogram

var data = d3.range(1000).map(d3.randomBates(10));
var formatCount = d3.format(",.0f");
console.log(data);

var parent = d3.select("body")
            .select("#histogram");

var element = parent.node();
var w = element.getBoundingClientRect().width;
var h = 300;

var el = d3.select("body")
            .select("#histogram");

var svg = el.append("svg")
            .attr("width", w)
            .attr("height", h);

var dat = [289, 247, 220, 287, 263, 215, 196, 212, 286, 129];
var months = ["Apr.", "May", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec.", "Jan."]
var max_dat = Math.max(...dat);
console.log(max_dat);
var marginbottom = 20;
var scaling = h/max_dat;
var bars = svg.selectAll("rect")
   .data(dat)
   .enter()
   .append("rect")
   	.attr("class", "histo-bar")
    .attr("x", function(d,i){ return i*w/dat.length})
    .attr("y", function(d,i) { return h-d*scaling;})
    .attr("width", function(d,i) { return w/dat.length; })
    .attr("height", function(d) { return (d-marginbottom)*scaling; });

var text = svg.selectAll("text")
   .data(dat)
   .enter()
	.append("text")
	.attr("class", "histo-text")
    .attr("dy", "1em")
    .attr("x", function(d,i){ return (i+0.5)*w/dat.length})
    .attr("y", function(d,i) { return h-d*scaling;})
    .attr("text-anchor", "middle")
    .text(function(d) { return formatCount(d); });

var text = svg.append("g").selectAll("text")
   .data(months)
   .enter()
	.append("text")
	.attr("class", "histo-text-months")
    .attr("dy", "1em")
    .attr("x", function(d,i){ return (i+0.5)*w/dat.length})
    .attr("y", function(d,i) { return h-marginbottom;})
    .attr("text-anchor", "middle")
    .text(function(d) { return d; });









