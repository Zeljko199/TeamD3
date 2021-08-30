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
    