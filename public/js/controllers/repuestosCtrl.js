angular.module('RepuestosApp')
.controller('Repuestos',function ($scope, base, dataForm, $filter){

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
      fecha: firebase.database.ServerValue.TIMESTAMP,
      tipo: $scope.formulario.tipoItem || "",
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

  $scope.sortType = 'fecha'; // set the default sort type
  $scope.sortReverse = false;  // set the default sort order
  $scope.search = '';     // set the default search/filter term


  $scope.sort = function (str){
    $scope.sortType = camel(str)
    $scope.sortReverse = !$scope.sortReverse
  }

  $scope.tituloElegido = function (titulo) {
    $scope.sortType == camel(titulo);
  }

  function camel (str) {
    return $filter('lowercase')(str).replace(/\W+(.)/g, function(match, chr){
            return chr.toUpperCase();
    });
  }

  $scope.check = {
    completo: false,
    pendiente: true,
    suspendido:false,
    encargado:true
  }

})
