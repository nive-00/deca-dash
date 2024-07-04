document.addEventListener('DOMContentLoaded', function() {
  // Data for pie chart
  const pieChartData = {
      labels: ['Negative', 'Neutral', 'Positive'],
      datasets: [{
          data: [10.0, 20.0, 50.0],
          backgroundColor: ['#FF6347', '#FFD700', '#32CD32'] // Red, Gold, Lime green
      }]
  };

  // Data for bar chart (histograph)
  const barChartData = {
      labels: ['Delicious', 'Yummy', 'Tasty', 'Nice', 'Good'],
      datasets: [{
          label: 'Word Frequency',
          data: [25, 20, 18, 15, 12],
          backgroundColor: '#4169E1' // Royal blue
      }]
  };

  // Options for charts
  const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
          datalabels: {
              color: 'white', // Color of the data labels
              font: {
                  size: 14 // Size of the data labels
              },
              formatter: (value) => {
                  return value + '%'; // Format the label to display percentage values
              }
          }
      },
      legend: {
          labels: {
              fontColor: 'black', // Color of legend labels
              fontSize: 14, // Size of legend labels
              boxWidth: 15, // Width of the colored box (default is 40)
              usePointStyle: true // Use point style for legend icons (circle or square)
          },
          display: true, // Display the legend
          position: 'right', // Position of the legend ('top', 'left', 'bottom', 'right')
          onClick: null, // Disable clicking on the legend items
          onHover: null, // Disable hovering over the legend items
          onLeave: null // Disable leaving the legend items
      }
  };

  // Get context with jQuery - using jQuery's .get() method.
  const pieChartCanvas = document.getElementById('pieChartCanvas').getContext('2d');
  new Chart(pieChartCanvas, {
      type: 'pie',
      data: pieChartData,
      options: chartOptions,
      plugins: [ChartDataLabels] // Register the plugin
  });

  const barChartCanvas = document.getElementById('barChartCanvas').getContext('2d');
  new Chart(barChartCanvas, {
      type: 'bar',
      data: barChartData,
      options: chartOptions,
      plugins: [ChartDataLabels] // Register the plugin
  });
});
