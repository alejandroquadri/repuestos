

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
      'Penetrit',
      'Acople Rapido',
      'Valvula',
      'Reten / O-ring / Guarnición / Guardapolvo',
      'Aro seeger',
      'Contactor',
      'Otro',
      'Chapa',
      'Hierro',
      'Aceite',
      'Limite de carrera',
      'Motor',
      'Sello',
      'Herramienta',
      'Cadenas',
      'Correas',
      'Rodamiento',
      'Repuestos Electricos',
      'Relé',
      'Neumática (conectores, tubos, etc)',
      'Hidráulica',
      'Filtros aire/aceite',
      'Repuestos broncería (llaves esféricas, teflón, caños )',
      'Corona',
      'Piñon',
      'Tornería',
      'Manguera',
      'Silastic cartucho',
      'Cable eléctrico',
      'Cable de acero',
      'Prensa cable',
      'Lámpara',
      'Pintura',
      'Pinceles',
      'Cinta aisladora'
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
      'Cortadora',
      'Otro',
      'Cargador',
      'Granalladora',
      'Cintas'
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

    o.titulos = ['Fecha','Tipo','Detalle','Cantidad','Unidad','Proveedor','Destino','Muestra','Status']

    return o;

  })
