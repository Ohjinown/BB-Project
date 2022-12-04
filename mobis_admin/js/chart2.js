/* chart2.js */

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "사용자 수", { role: "style" }, { role: 'annotation' }],
    ["1학년", 50, "#4C54DD",'5%'],
    ["2학년", 150, "#4C54DD",'15%'],
    ["3학년", 200, "#4C54DD",'20%'],
    ["4학년", 100, "#8451F2",'10%'],
    ["5학년", 150, "#8451F2",'15%'],
    ["6학년", 350, " #8451F2",'35%']
  ]);

  var options = {
    title: "",
    width: 400,
    height: 500,
    fontSize: 10,
    bar: {groupWidth: "50%"},
    legend: { position: "none" },
    annotations: { textStyle: {fontSize: 14, bold: true, auraColor: '#fff'}
                 }
    };
  
  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 3,
                     type: "string",
                     role: "annotation" },
                   2]);

  
  var chart = new google.visualization.ColumnChart(document.getElementById("chart2"));
  chart.draw(view, options);
}