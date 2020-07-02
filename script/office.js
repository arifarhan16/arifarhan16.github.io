  //pie
var ctxP = document.getElementById("office").getContext('2d');
var myPieChart = new Chart(ctxP, {
type: 'pie',
data: {
labels: ["WORD", "EXCEL", "PPT", "ACCESS"],
datasets: [{
data: [100, 60, 70, 20],
backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5"]
}]
},
options: {
responsive: true
}
});