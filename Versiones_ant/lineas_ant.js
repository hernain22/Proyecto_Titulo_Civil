new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', value: 20, valor2: 25, valor3: 3 },
    { year: '2009', value: 10, valor2: 15, valor3: 6 }
    { year: '2010', value: 5, valor2: 10, valor3: 7 },
    { year: '2011', value: 5, valor2: 12, valor3: 10 },
    { year: '2012', value: 20, valor2: 25, valor3: 40 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value', 'valor2', 'valor3'],
  lineWidth: 1.5,
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['CPU', 'Memoria', 'Disco'],
  resize: true,
  lineColors: ['#C14D9F','#2CB4AC', '#FF6633']
});