import app from "./app";
import "@babel/polyfill";
import  * as cuf from '../src/utils/cuf'
import  * as fxmlFile from '../src/utils/xml'
import * as cifrado from '../src/utils/md5_sha256'




var xml2js = require('xml2js');
var stringcuf=cuf.generarCuf('123456789','20190113163721231',0,1,1,1,1,1,0)
console.log('CUF: '+stringcuf)


console.log('CUF BASE 16: '+cuf.Base16(stringcuf))



/*
// firmado digital
try {
    dsig.openSession('12345678');
    var xml = '<?xml version="1.0" encoding="UTF-8"?>' +
        ' <facturaElectronicaTasaCero xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="facturaElectronicaTasaCero.xsd">' +
        ' <cabecera>' +
        '    <nitEmisor>12344897011</nitEmisor>' +
        '       <razonSocialEmisor>PRUEBA</razonSocialEmisor>' +
        '       <municipio>LA PAZ - BOLIVIA</municipio>' +
        '    <telefono>22276489</telefono>	 ' +
        '    <numeroFactura>24</numeroFactura>' +
        '    <cuf>1eecd7b50eef5e5bde755ca05f735</cuf>' +
        '    <cufd>dae91da3e083d42a3da456665b8cad2e</cufd>' +
        '    <codigoSucursal>0</codigoSucursal>' +
        '    <direccion>Plaza Avaroa 53</direccion>' +
        '    <codigoPuntoVenta xsi:nil="true" />' +
        '    <fechaEmision>2019-01-11T19:35:36.169</fechaEmision>' +
        '    <nombreRazonSocial>Perez</nombreRazonSocial>' +
        '    <codigoTipoDocumentoIdentidad>5</codigoTipoDocumentoIdentidad>' +
        '    <numeroDocumento>1234323016</numeroDocumento>' +
        '    <complemento xsi:nil="true" />' +
        '    <codigoCliente>123</codigoCliente>' +
        '    <codigoMetodoPago>1</codigoMetodoPago>' +
        '    <numeroTarjeta xsi:nil="true" />' +
        '    <montoTotal>150</montoTotal>' +
        '    <codigoMoneda>1</codigoMoneda>' +
        '    <tipoCambio>1</tipoCambio>' +
        '    <montoTotalMoneda>150</montoTotalMoneda>' +
        '    <leyenda>Ley N° 453: Los contratos de adhesión deben redactarse en términos claros, comprensibles, legibles y deben informar todas las facilidades y limitaciones.</leyenda>' +
        '    <usuario>SALIAGA21</usuario>' +
        '    <codigoDocumentoSector>8</codigoDocumentoSector>' +
        '  </cabecera>' +
        ' <detalle>' +
        '     <items>' +
         '              < actividadEconomica > 7892165</actividadEconomica>' +
         '          <codigoProductoSin>64532</codigoProductoSin>' +
         '          <codigoProducto>123</codigoProducto>' +
         '          <descripcion>libro de matematicas</descripcion>' +
         '          <cantidad>1</cantidad>' +
         '          <unidadMedida>62</unidadMedida>' +
         '          <precioUnitario>150</precioUnitario>' +
         '          <montoDescuento xsi:nil="true"/>' +
         '          <subTotal>150</subTotal>' +
         '  </items >' +
         '      <items>' +
         '          <actividadEconomica>7892165</actividadEconomica>' +
         '          <codigoProductoSin>64532</codigoProductoSin>' +
         '          <codigoProducto>123</codigoProducto>' +
         '          <descripcion>libro de matematicas</descripcion>' +
         '          <cantidad>1</cantidad>' +
         '          <unidadMedida>62</unidadMedida>' +
         '          <precioUnitario>150</precioUnitario>' +
         '          <montoDescuento xsi:nil="true" />' +
         '          <subTotal>150</subTotal>' +
         '      </items>'+
    ' </detalle>' +
        '</facturaElectronicaTasaCero>';
    console.log(dsig.computeSignature(xml, 'detalle'));
} catch (e) {
    console.error(e);
} finally {
    dsig.closeSession();
}
 */

/**  ejemplo de xml */
var xml= fxmlFile.createXml();
//console.log(fxmlFile.firmadoDigitalXml(xml));

var fileCifrado= cifrado.fileHash('facturaElectronicaTasaCero.xml','sha256');
console.log('XML CIFRADO CON SHA256: '+fileCifrado);


var fileCifrado= cifrado.fileHashDescipher(fileCifrado);
console.log('dato: '+fileCifrado);

/* const crypto = require('crypto');
const fs = require('fs');

const fileBuffer = fs.readFileSync('./package.json');
const hashSum = crypto.createHash('sha256');
hashSum.update(fileBuffer);

const hex = hashSum.digest('hex');

console.log(hex); */


/* 
var crypto = require('crypto');

var hash = crypto.createHash('sha256');

var code = 'bacon';

code = hash.update(code);
code =hash.digest('hex');

console.log(code); */
async function main() {
    //conectar();

    const PORT = 4000
    await app.listen(PORT);
    console.log('Server on port : ' + PORT);
}


main();