var app = angular.module('smartPrice', [ 'ngRoute', 'ngMessages' ]);

app.controller('smartPriceController', function($scope) {

	$scope.hola = 'aaaaa3333';

	$scope.calculos = [];

	$scope.calculos.push(new Calculo(null, null, null));

	$scope.calcular = function(x) {

		var result = ((Number(x.precio) * 100) / Number(x.cantidad)).toFixed(2);

		if (isNaN(result) || !isFinite(result)) {
			result = '';
		}

		x.resultado = result;
	}

	$scope.agregar = function() {

		$scope.calculos.push(new Calculo(null, null, null));
	}

});
