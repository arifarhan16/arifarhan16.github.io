 //pie
var ctxP = document.getElementById("programming").getContext('2d');
var myPieChart = new Chart(ctxP, {
type: 'pie',
data: {
labels: ["PHP", "CSS", "HTML", "JS", "MYSQL"],
datasets: [{
data: [75, 42, 95, 20, 50],
backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
}]
},
options: {
responsive: true
}
});