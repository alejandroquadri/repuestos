angular.module('RepuestosApp')
.controller('Repuestos',function ($scope, base, dataForm){

  $scope.tabla = false;
  base.$loaded()
  .then(function(x) {
    $scope.tabla = true;
  })

  $scope.formulario = {};
  $scope.repuestos = base;

  $scope.items = dataForm.items;
  $scope.maquinas = dataForm.maquinas;
  $scope.tipoStatus = dataForm.tipoStatus;
  $scope.unidades = dataForm.unidades;

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

  $scope.sortType = 'status'; // set the default sort type
  $scope.sortReverse = false;  // set the default sort order
  $scope.search = '';     // set the default search/filter term

})
