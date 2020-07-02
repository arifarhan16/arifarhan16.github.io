//pie
var ctxP = document.getElementById("editing").getContext('2d');
var myPieChart = new Chart(ctxP, {
type: 'pie',
data: {
labels: ["PHOTOSHOP", "CORELDRAW","ADOBE ILLUSTRATOR"],
datasets: [{
data: [80, 40, 20],
backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
}]
},
options: {
responsive: true
}
});