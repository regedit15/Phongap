var app = angular.module('smartPrice', [ 'ngRoute', 'ngMessages' ]);

app.controller('smartPriceController', function($scope) {

	$scope.tipo = 'cantidad';

	$scope.calculos = [];

	$scope.calcular = function(x) {

		var result;

		switch (x.tipo) {

			case 'cantidad':
				result = ((Number(x.precio) * 100) / Number(x.cantidad)).toFixed(2);
				break;

			case 'unidad':
				result = (Number(x.precio) / Number(x.cantidad)).toFixed(2);
				break;

			case 'descuento1':
				result = (Number(x.precio) / Number(x.cantidad)).toFixed(2);
				break;
		}

		if (isNaN(result) || !isFinite(result)) {
			result = '';
		} else {
			result = '$ ' + result;
		}

		x.resultado = result;
	}

	$scope.agregar = function() {
		$scope.calculos.push(new Calculo(null, null, null, 'cantidad'));
	}

	$scope.limpiar = function(x) {
		x.cantidad = null;
		x.precio = null;
		x.resultado = null;
		$scope.form.$setUntouched(false);
	}

	$scope.agregar();
});
