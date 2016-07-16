angular.module('RepuestosApp')
.controller('Repuestos',function ($scope, base){

  $scope.formulario = {};
  $scope.repuestos = base;
  $scope.tabla = false;

  $scope.submit = function () {
    var nuevo = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      tipoItem: $scope.formulario.tipoItem || "",
      detalle: $scope.formulario.detalle || "",
      destino: $scope.formulario.destino || "",
      proveedor: $scope.formulario.proveedor || "",
      cantidad: $scope.formulario.cantidad || "",
      unidad: $scope.formulario.unidad || "",
      muestra: $scope.formulario.muestra || "",
      encargado: $scope.formulario.encargado || ""
    }
    console.log(nuevo);
    $scope.repuestos.$add(nuevo)
    $scope.formulario = {}
    $scope.form.$setPristine();
    $scope.form.$setUntouched();
  }

})
