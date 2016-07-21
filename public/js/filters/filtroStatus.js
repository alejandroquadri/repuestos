angular.module('RepuestosApp')

.filter('filtroStatus', function(){
  return function (array, filtro) {
    var out = [];

    angular.forEach(array, function (registro) {
      switch (registro.status) {
        case 'Completo':
          if (filtro.completo === true) {out.push(registro)}
          break;
        case 'Pendiente':
          if (filtro.pendiente === true) {out.push(registro)}
          break;
        case 'Suspendido':
          if (filtro.suspendido === true) {out.push(registro)}
          break;
        case 'Encargado':
          if (filtro.encargado === true) {out.push(registro)}
          break;
      }
    });
    return out;
  };
})
