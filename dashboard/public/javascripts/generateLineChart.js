function generateLineChart(id, tdID, title, chartType) {
    var data = require("./public/javascripts/getData");
    var xmax = 1000; //maximum x-axis range in seconds. Should be the total runtime

    var layout = {
    xaxis: {range: [0, xmax]},
    title: title,
    width: 450,
    height: 400,
    margin: {
        l: 40,
        r: 40,
        b: 40,
        t: 40,
      }
    };

    Plotly.newPlot(id, [{
        y:[data.getData(tdID)],
        type: chartType
    }], layout);

    var sampleRate = 50; // sample rate in ms per sample

    setInterval(function(){
        var currentData = data.getData(tdID);
        Plotly.extendTraces(id,{ y:[[currentData]]}, [0]);
    }, sampleRate);
}

    