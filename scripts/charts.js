var activityCanvas_1 = document.getElementById("chart_one");

var dataFirst = {
    label: "Paragraphs Alloted",
    data: [10, 20, 75, 20, 20, 55, 40],
    lineTension: 0,
    fill: false,
    borderColor: 'red'
  };

var dataSecond = {
    label: "Paragraphs Labelled",
    data: [10, 15, 60, 20, 15, 30, 30],
    lineTension: 0,
    fill: false,
  borderColor: 'green'
  };

  var dataThird = {
    label: "Paragraphs Bypassed",
    data: [0, 5, 5, 0, 5, 25, 10],
    lineTension: 0,
    fill: false,
  borderColor: 'blue'
  };

  var dataFourth = {
    label: "Paragraphs Modified",
    data: [1, 1, 0, 0, 1, 3, 10],
    lineTension: 0,
    fill: false,
  borderColor: 'yellow'
  };

var activityData = {
  labels: ["Nov 22", "Nov 23", "Nov 24", "Nov 25", "Nov 26", "Nov 27", "Nov 28"],
  datasets: [dataFirst, dataSecond, dataThird, dataFourth]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      //boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(activityCanvas_1, {
  type: 'line',
  data: activityData,
  options: chartOptions
});

var activityCanvas_2 = document.getElementById("chart_two");

var dataFirst = {
    label: "Total Labelling Time",
    data: [10, 20, 75, 20, 20, 55, 40],
    lineTension: 0,
    fill: false,
    borderColor: 'red'
  };

var dataSecond = {
    label: "Average Labelling Time",
    data: [10, 15, 60, 20, 15, 30, 30],
    lineTension: 0,
    fill: false,
  borderColor: 'green'
  };

  var dataThird = {
    label: "Minimum Labelling Time",
    data: [0, 5, 5, 0, 5, 25, 10],
    lineTension: 0,
    fill: false,
  borderColor: 'blue'
  };

  var dataFourth = {
    label: "Maximum Labelling Time",
    data: [1, 1, 0, 0, 1, 3, 10],
    lineTension: 0,
    fill: false,
  borderColor: 'yellow'
  };

var activityData = {
  labels: ["Nov 22", "Nov 23", "Nov 24", "Nov 25", "Nov 26", "Nov 27", "Nov 28"],
  datasets: [dataFirst, dataSecond, dataThird, dataFourth]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      //boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(activityCanvas_2, {
  type: 'line',
  data: activityData,
  options: chartOptions
});