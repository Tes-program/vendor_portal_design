//setup block
const data = {
    labels: ['Color1', 'Color2', 'Color3', 'Color4'],
    datasets: [{
      data: [90, 40, 45, 185],
      backgroundColor: [
        'rgb(255, 0, 0)',
        'rgb(140, 29, 162)',
        'rgb(61, 68, 255)',
        'rgb(158, 34, 255)'
      ],
      borderColor: [
        'rgb(255, 0, 0)',
        'rgb(140, 29, 162)',
        'rgb(61, 68, 255)',
        'rgb(158, 34, 255)'
      ], 
      borderWidth: 1
    }]
  };

  //options block
  const options = {
    plugins: {
      legend: {
        //position: 'right'
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    animations: false

  };

  //config block
  const config = {
    type: 'pie',
    data,
    options,
    rotation: 20
  };

  //render block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  //Doughnut1
  const dataNut1 = {
    labels: ['Color1', 'Color2', 'Color3', 'Color4'],
    datasets: [{
      data: [90, 270],
      backgroundColor: [
        'rgb(91, 211, 102)',
        'rgb(207, 216, 220)'
      ],
      borderColor: [
        'rgb(91, 211, 102)',
        'rgb(207, 216, 220)'
      ], 
      borderWidth: 1,
      cutout: '80%'
    }]
  };
  const stackedTextNut1 = {
    id: 'stackedTextNut1',
    afterDatasetsDraw(chart, args, options) {
      const {ctx, data, chartArea: {top, bottom, left, right, width, height}} = chart;
      
      console.log(data.datasets[0].data[0])

      ctx.save();
      const fontHeight= 35;
      const fontHeight2 = fontHeight / 2; 
      ctx.font = `bolder ${fontHeight}px Arial`;
      ctx.fillStyle = 'rgb(40, 42, 41)';
      ctx.textAlign = 'center';
      ctx.fillText(data.datasets[0].data[0] +'%', width / 2, height / 2);
      ctx.restore();

      ctx.font = ` ${fontHeight2}px Arial`;
      ctx.fillStyle = 'rgb(67, 67, 67)';
      ctx.textAlign = 'center';
      ctx.fillText('SUPPLIERS', width / 2, height / 2 + fontHeight);
      ctx.restore(); 
    }
  }
  //config block
  const configNut1 = {
    type: 'doughnut',
    data: dataNut1,
    options,
    plugins: [stackedTextNut1]
  };
  const myChart1 = new Chart(
    document.getElementById('myChart1'),
    configNut1
  );

  //Doughnut2
  const dataNut2 = {
    labels: ['Color1', 'Color2', 'Color3', 'Color4'],
    datasets: [{
      data: [270, 90],
      backgroundColor: [
        'rgb(234, 61, 47)',
        'rgb(207, 216, 220)'
      ],
      borderColor: [
        'rgb(255, 0, 0)',
        'rgb(207, 216, 220)'
      ], 
      borderWidth: 1,
      cutout: '80%'
    }]
  };
  const stackedTextNut2 = {
    id: 'stackedTextNut2',
    afterDatasetsDraw(chart, args, options) {
      const {ctx, data, chartArea: {top, bottom, left, right, width, height}} = chart;
      
      console.log(data.datasets[0].data[0])

      ctx.save();
      const fontHeight= 35;
      const fontHeight2 = fontHeight / 2; 
      ctx.font = `bolder ${fontHeight}px Arial`;
      ctx.fillStyle = 'rgb(40, 42, 41)';
      ctx.textAlign = 'center';
      ctx.fillText(data.datasets[0].data[0] +'%', width / 2, height / 2);
      ctx.restore();

      ctx.font = ` ${fontHeight2}px Arial`;
      ctx.fillStyle = 'rgb(67, 67, 67)';
      ctx.textAlign = 'center';
      ctx.fillText('UNLISTED', width / 2, height / 2 + fontHeight);
      ctx.restore(); 
    }
  }
  //config block
  const configNut2 = {
    type: 'doughnut',
    data: dataNut2,
    options,
    plugins: [stackedTextNut2]
  };
  const myChart2 = new Chart(
    document.getElementById('myChart2'),
    configNut2
  );

  //Doughnut3
  const dataNut3 = {
    labels: ['Color1', 'Color2', 'Color3', 'Color4'],
    datasets: [{
      data: [180, 180],
      backgroundColor: [
        'rgb(249, 168, 38)',
        'rgb(207, 216, 220)'
      ],
      borderColor: [
        'rgb(249, 168, 38)',
        'rgb(207, 216, 220)'
      ], 
      borderWidth: 1,
      cutout: '80%'
    }]
  };
  const stackedTextNut3 = {
    id: 'stackedTextNut3',
    afterDatasetsDraw(chart, args, options) {
      const {ctx, data, chartArea: {top, bottom, left, right, width, height}} = chart;
      
      console.log(data.datasets[0].data[0])

      ctx.save();
      const fontHeight= 35;
      const fontHeight2 = fontHeight / 2; 
      ctx.font = `bolder ${fontHeight}px Arial`;
      ctx.fillStyle = 'rgb(40, 42, 41)';
      ctx.textAlign = 'center';
      ctx.fillText(data.datasets[0].data[0] +'%', width / 2, height / 2);
      ctx.restore();

      ctx.font = ` ${fontHeight2}px Arial`;
      ctx.fillStyle = 'rgb(67, 67, 67)';
      ctx.textAlign = 'center';
      ctx.fillText('CONTRACTED', width / 2, height / 2 + fontHeight);
      ctx.restore(); 
    }
  }
  //config block
  const configNut3 = {
    type: 'doughnut',
    data: dataNut3,
    options,
    plugins: [stackedTextNut3]
  };
  const myChart3 = new Chart(
    document.getElementById('myChart3'),
    configNut3
  );

  //Doughnut4
  const dataNut4 = {
    labels: ['Color1', 'Color2', 'Color3', 'Color4'],
    datasets: [{
      data: [225, 135],
      backgroundColor: [
        'rgb(21, 101, 216)',
        'rgb(207, 216, 220)'
      ],
      borderColor: [
        'rgb(21, 101, 216)',
        'rgb(207, 216, 220)'
      ], 
      borderWidth: 1,
      cutout: '80%'
    }]
  };
  const stackedTextNut4 = {
    id: 'stackedTextNut4',
    afterDatasetsDraw(chart, args, options) {
      const {ctx, data, chartArea: {top, bottom, left, right, width, height}} = chart;
      
      console.log(data.datasets[0].data[0])

      ctx.save();
      const fontHeight= 35;
      const fontHeight2 = fontHeight / 2; 
      ctx.font = `bolder ${fontHeight}px Arial`;
      ctx.fillStyle = 'rgb(40, 42, 41)';
      ctx.textAlign = 'center';
      ctx.fillText(data.datasets[0].data[0] +'%', width / 2, height / 2);
      ctx.restore();

      ctx.font = ` ${fontHeight2}px Arial`;
      ctx.fillStyle = 'rgb(67, 67, 67)';
      ctx.textAlign = 'center';
      ctx.fillText('CONTRACTED', width / 2, height / 2 + fontHeight);
      ctx.restore(); 
    }
  }
  //config block
  const configNut4 = {
    type: 'doughnut',
    data: dataNut4,
    options,
    plugins: [stackedTextNut4]
  };
  const myChart4 = new Chart(
    document.getElementById('myChart4'),
    configNut4
  );

  //Doughnut5
  const dataNut5 = {
    labels: ['Color1', 'Color2', 'Color3', 'Color4'],
    datasets: [{
      data: [135, 225],
      backgroundColor: [
        'rgb(139, 29, 162)',
        'rgb(207, 216, 220)'
      ],
      borderColor: [
        'rgb(139, 29, 162)',
        'rgb(207, 216, 220)'
      ], 
      borderWidth: 1,
      cutout: '80%'
    }]
  };
  const stackedTextNut5 = {
    id: 'stackedTextNut5',
    afterDatasetsDraw(chart, args, options) {
      const {ctx, data, chartArea: {top, bottom, left, right, width, height}} = chart;
      
      console.log(data.datasets[0].data[0])

      ctx.save();
      const fontHeight= 35;
      const fontHeight2 = fontHeight / 2; 
      ctx.font = `bolder ${fontHeight}px Arial`;
      ctx.fillStyle = 'rgb(40, 42, 41)';
      ctx.textAlign = 'center';
      ctx.fillText(data.datasets[0].data[0] +'%', width / 2, height / 2);
      ctx.restore();

      ctx.font = ` ${fontHeight2}px Arial`;
      ctx.fillStyle = 'rgb(67, 67, 67)';
      ctx.textAlign = 'center';
      ctx.fillText('CONTRACTED', width / 2, height / 2 + fontHeight);
      ctx.restore(); 
    }
  }
  //config block
  const configNut5 = {
    type: 'doughnut',
    data: dataNut5,
    options,
    plugins: [stackedTextNut5]
  };
  const myChart5 = new Chart(
    document.getElementById('myChart5'),
    configNut5
  );