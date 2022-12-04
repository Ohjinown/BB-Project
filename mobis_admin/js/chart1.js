/* chart1.js */

google.load("visualization", "1.1", {packages:["line"],'language':'ko'});
google.setOnLoadCallback(drawChart1);

function drawChart1() {
  var data = new google.visualization.DataTable();
  
  data.addColumn('string', '날짜별');
  data.addColumn( 'number' , '참여자 수');
  
  data.addRows([
    ['07월1일', 0], 
    ['07월2일', 200], 
    ['07월3일', 500], 
    ['07월4일', 200], 
    ['07월5일', 300], 
    ['07월6일', 400], 
    ['07월7일', 600]
  ]);
  
  var option = {
    width: 650,
    height: 350,
    colors: ['#4C54DD'],
    legend: {position: 'none'},
    axes: {
        x: {
          0: {  label: ''} // Top x-axis.
        }
      },
  };
  
  var chart = new google.charts.Line(document.getElementById('chart1'));
  chart.draw(data, option);
}
