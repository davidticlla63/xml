var xml2js = require('xml2js');
const Dsig = require('pkcs12-xml');
var dsig = new Dsig('store.p12');
const fs = require('fs');

export function createXml() {

    var items = [];
    for (let index = 0; index < 5; index++) {
        items.push({
            'actividadEconomica': {
                _: 7892165
            },
            'codigoProductoSin': {
                _: 64532
            },
            'codigoProducto': {
                _: 123
            },
            'descripcion': {
                _: "libro de matematicas"
            },
            'cantidad': {
                _: 1
            },
            'unidadMedida': {
                _: 62
            },
            'precioUnitario': {
                _: 150
            },
            'montoDescuento': {
                $: {
                    'xsi:nil': 'true'
                }
            },
            'subTotal': {
                _: 150
            }

        });


    }


    var obj = {
        'facturaElectronicaTasaCero': {
            $: {
                'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                'xsi:noNamespaceSchemaLocation': 'facturaElectronicaTasaCero.xsd'
            },
            'cabecera': {
                'nitEmisor': {
                    _: "12344897011"
                }

                , 'razonSocialEmisor': {
                    _: "prueba"
                },
                'municipio': {
                    _: "SANTA CRUZ"
                },
                'telefono': {
                    _: "73675290"
                },
                'numeroFactura': {
                    _: "123456"
                },
                'cuf': {
                    _: "1eecd7b50eef5e5bde755ca05f735"
                },
                'cufd': {
                    _: "dae91da3e083d42a3da456665b8cad2e"
                },
                'codigoSucursal': {
                    _: "0"
                },
                'direccion': {
                    _: "Plaza Avaroa 53"
                },
                'codigoPuntoVenta': {
                    $: {
                        'xsi:nil': 'true'
                    }
                },
                'fechaEmision': {
                    _: "2019-01-11T19:35:36.169"
                },
                'nombreRazonSocial': {
                    _: "DAVID"
                },
                'codigoTipoDocumentoIdentidad': {
                    _: 8
                },
                'numeroDocumento': {
                    _: 4561321
                },
                'complemento': {
                    $: {
                        'xsi:nil': 'true'
                    }
                },
                'codigoCliente': {
                    _: 7896516
                },
                'codigoMetodoPago': {
                    _: 123654
                },
                'numeroTarjeta': {
                    $: {
                        'xsi:nil': 'true'
                    }
                },
                'montoTotal': {
                    _: 150
                },
                'codigoMoneda': {
                    _: 1
                },
                'tipoCambio': {
                    _: 1
                },
                'montoTotalMoneda': {
                    _: 1
                },
                'leyenda': {
                    _: 1
                },
                'usuario': {
                    _: 1
                },
                'codigoDocumentoSector': {
                    _: 1
                },
            }
            ,
            'detalle': { items },

        }
    }



    var dsig = new Dsig('store.p12');//archivo de la llave

    var builder = new xml2js.Builder();
    return builder.buildObject(obj);
}

export function firmadoDigitalXml(xml) {

    dsig.openSession('12345678');
    xml = dsig.computeSignature(xml.toString(), 'detalle')
    fs.writeFileSync('facturaElectronicaTasaCero.xml', xml);
    dsig.closeSession();
    return xml
}


//console.log(xml);
