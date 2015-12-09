
var n = 2;
console.log("n = " + n);

var xend = 10;
//alert(alfa[1].length); // 1

var alfa = [[1,1,1],[1,1,1]];
//alfa[0][1] = 1

var beta = [[1.005,1.007,1.009],[1.003,1.002,1.001]];
//beta[0][1] = 1.05

//Tiempos para alfa y para beta
var t1 = 0;
var t2 = 0;


//Con esta funcion se crea la linea 1 (alfa 1 1, 1 2, y 1 3 junto con beta 1 1, 1 2, 1 3)
var y = function(i){
	var res = (alfa[0][i]*(Math.pow(beta[0][i],(t1+1))-1))/(beta[0][i]-1); //Lo de arriba de la ecuacion
	console.log("t = " + t1 +" y = " + res + " alfa = " + alfa[0][i] + " beta = " + beta[0][i]); //Esto es lo que vez a la derecha de la pantalla (consola)
	t1+=12; //Subimos el tiempo
	return res;
}


//Con esta funcion se crea la linea 2 (alfa 2 1, 2 2, y 2 3 junto con beta 2 1, 2 2, 2 3)
var y2 = function(i){
	var res2 = (alfa[1][i]*(Math.pow(beta[1][i],(t2+1))-1))/(beta[1][i]-1); //Lo de arriba de la ecuacion
	console.log("t = " + t2 +" y = " + res2 + " alfa = " + alfa[1][i] + " beta = " + beta[1][i]); //Esto es lo que vez a la derecha de la pantalla (consola)
	t2+=12; //Subimos el tiempo
	return res2;
}

var lineChartData = {
	labels : [],
	datasets : [
		{
			label: "My First dataset",
			fillColor : "rgba(220,220,220,0.2)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : []
		},
		{
			label: "My Second dataset",
			fillColor : "rgba(151,187,205,0.2)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,1)",
			data : []
		}
	]
}
for (var i = 0; i <= xend; i++) {
	lineChartData.labels[i] = i;
	lineChartData.datasets[0].data[i] = y(n);
	lineChartData.datasets[1].data[i] = y2(n);
};



window.onload = function(){
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true
	});
}