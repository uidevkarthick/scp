

setTimeout(function () {
    new Chartist.Pie('.donut-chart', {
        series: [40, 30, 20, 5, 10],
    }, {
        donut: true,
        donutWidth: 40,
        donutSolid: true,
        startAngle: 0,
        showLabel: false
    });
}, 800);

