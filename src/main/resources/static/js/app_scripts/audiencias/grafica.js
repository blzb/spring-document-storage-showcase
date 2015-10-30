$(function () {

    var doughnutData = [
        {
            value: 300,
            color: "#a3e1d4",
            highlight: "#1ab394",
            label: "Carlos Navarrete"
        },
        {
            value: 50,
            color: "#dedede",
            highlight: "#1ab394",
            label: "Héctor Fernández"
        },
        {
            value: 80,
            color: "#F8AC59",
            highlight: "#1ab394",
            label: "César Castillo"
        },
        {
            value: 100,
            color: "#b5b8cf",
            highlight: "#1ab394",
            label: "Sandra López"
        }
    ];

    var doughnutOptions = {
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 45, // This is 0 for Pie charts
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        responsive: true,
    };


    var ctx = document.getElementById("doughnutChart").getContext("2d");
    var myNewChart = new Chart(ctx).Doughnut(doughnutData, doughnutOptions);

});