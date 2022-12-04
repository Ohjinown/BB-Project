/* chart3 */
google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart3);
      function drawChart3() {
        var data = google.visualization.arrayToDataTable([
          ['등교지역', '체험 컨텐츠 비율'],
          ['농촌', 40],
          ['공장가', 28],
          ['신도심', 12],
          ['구도심', 20]
        ]);

        var options = {
          title: '',
          pieHole: 0.55,
          width: 300,
          height: 450,
          fontSize: 16,
          colors: ['#4C54DD', '#FE5768', '#3ADB29', '#FFC501'],
          chartArea:{left: 0, 
                     top:0, 
                     width:'300',
                     height:'250',
                    stroke: 'black'},
          legend: {position: 'bottom',
                   textStyle: {color: '#606060', fontSize: 12},
                  alignment: 'center'}
        };
       
        
        var chart = new google.visualization.PieChart(document.getElementById('chart3'));
        chart.draw(data, options);
      }