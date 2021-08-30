/* naslov na stranici instalacija*/
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

/*line stranica*/
var lineGenerator = d3.line();
var points = [
	[0, 80],
	[100, 100],
	[200, 30],
	[300, 50],
	[400, 40],
	[500, 80]
];

var pathData = lineGenerator(points);

//selektovanje putanje i postavljanej d atrbuta
d3.select('path')
	.attr('d', pathData);

 /* area 1 kod */
var areaGenerator = d3.area();

  var point = [
    [0, 80],
    [100, 100],
    [200, 30],
    [300, 50],
    [400, 40],
    [500, 80]
  ];
  
  var area = areaGenerator(point);
  // kreiranje putanje elemnta i postavljanje d atributa
   d3.select('g')
  .append('path')
  .attr('d', area);


 /* area 2 kod */
  var areaGenerator2 = d3.area().y0(150);
  var points = [
    [0, 80],
    [100, 100],
    [200, 30],
    [300, 50],
    [400, 40],
    [500, 80]
  ];
  
  var area = areaGenerator2(points);
  
  // kreiranje putanje elemnta i postavljanje d atributa
  d3.select('#area2')
    .append('path')
    .attr('d', area);
    
// **********STRANICA ARC

// kreiranje arc generatora 
var arcGenerator = d3.arc();

// generisanje path stringa
var pathData = arcGenerator({
  startAngle: 0,
  endAngle: 0.25 * Math.PI,
  innerRadius: 50,
  outerRadius: 100
});

// kreiranej path elementa i setovanje d atributa
d3.select('g')
	.append('path')
	.attr('d', pathData);


  var arcGenerator1 = d3.arc()
	.innerRadius(20)
	.outerRadius(100)
	.padAngle(.02)
	.padRadius(100)
	.cornerRadius(4);

var arcData = [
	{startAngle: 0, endAngle: 0.2},
	{startAngle: 0.2, endAngle: 0.6},
	{startAngle: 0.6, endAngle: 1.4},
	{startAngle: 1.4, endAngle: 3},
	{startAngle: 3, endAngle: 2* Math.PI}
];

d3.select('#arc-code')
	.selectAll('path')
	.data(arcData)
	.join('path')
	.attr('d', arcGenerator1);


