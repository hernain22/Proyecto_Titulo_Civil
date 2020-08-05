new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'graficadecpu2',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { año: '2008', value: 3 },
    { año: '2010', value: 5  },
    { año: '2012', value: 7}
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'año',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  lineWidth: 1.5,
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['RAM'],
  resize: true,
  responsive: true,
  maintainAspectRatio: false,
  lineColors: ['#C14D9F','#2CB4AC', '#FF6633']
});