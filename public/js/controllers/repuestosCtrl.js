angular.module('RepuestosApp')
.controller('Repuestos',function ($scope, base, dataForm){

  $scope.formulario = {};
  $scope.repuestos = base;
  $scope.tabla = false;

  $scope.items = dataForm.items;
  $scope.maquinas = dataForm.maquinas;
  $scope.tipoStatus = dataForm.tipoStatus;
  $scope.unidades = dataForm.unidades;

  $scope.submit = function () {
    var nuevo = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      tipoItem: $scope.formulario.tipoItem || "",
      detalle: $scope.formulario.detalle || "",
      //observacion: $scope.formulario.observacion || "",
      destino: $scope.formulario.destino || "",
      proveedor: $scope.formulario.proveedor || "",
      cantidad: $scope.formulario.cantidad || "",
      unidad: $scope.formulario.unidad || "",
      muestra: $scope.formulario.muestra || "",
      status: "Pendiente"
    }
    console.log(nuevo);
    $scope.repuestos.$add(nuevo)
    $scope.formulario = {}
    $scope.form.$setPristine();
    $scope.form.$setUntouched();
  }

  $scope.cambioStatus = function(repuesto) {
    $scope.repuestos.$save(repuesto).then(function(){
      console.log('salvado');
    })
  }

})
