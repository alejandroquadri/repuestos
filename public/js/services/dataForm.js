

angular.module('RepuestosApp')

  .factory('dataForm', function (){

    var o = {};

    o.items = [
      'Disco de corte',
      'Disco de desbaste',
      'Arandela plana',
      'Arandela Schnoor',
      'Tuerca',
      'Tornillo cabeza Allen',
      'Tornillo cabeza frezada',
      'Tornillo cabeza hexagonal',
      'Gusano',
      'Abrazadera',
      'Varilla Roscada',
      'Tela Esmaril',
      'WD 40',
      'Penetric',
      'Acople Rapido',
      'Valvula'
    ]

    o.maquinas = [
      '995',
      '650',
      'Breton',
      'Lineal',
      'Taller',
      'Centrifuga',
      'Biseladora',
      'Elba',
      'Desbañadora',
      'Cortadora'
    ]

    o.unidades = [
      'litros',
      'ml',
      'unidad',
      'm2',
      'juego',
      'kg'
    ]

    o.tipoStatus = ['Pendiente','Encargado','Completo','Suspendido'];

    return o;

  })
