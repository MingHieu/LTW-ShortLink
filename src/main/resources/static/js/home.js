const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]

const data = {
  labels: labels,
  datasets: [
    {
      label: "Clicks",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
      data: [120, 85, 200, 150, 180, 230, 300, 250, 200],
      pointBackgroundColor: "white",
      pointBorderColor: "rgba(255, 99, 132, 1)",
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 7,
    },
  ],
}

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Click Statistics by Month",
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "white",
        titleColor: "black",
        bodyColor: "black",
        titleAlign: "center",
        bodyAlign: "center",
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || ""

            if (label) {
              label += ": "
            }
            label += context.parsed.y + " clicks"
            return label
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          stepSize: 50,
          beginAtZero: true,
          callback: function (value, index, values) {
            return value + " clicks"
          },
        },
      },
    },
  },
}

// const myChart = new Chart(document.getElementById("lineChart"), config)
