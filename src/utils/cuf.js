export function generarCuf(nitEmisor, fechaHora, sucursal, modalidad, tipoEmision, codigoDocumentoFiscal, tipoDocumentoSector, nroFactura, puntoVenta) {
  let cuf = nitEmisor.toString().padStart(13, 0)
  cuf += fechaHora.toString().padStart(17, 0)
  cuf += sucursal.toString().padStart(4, 0)
  cuf += modalidad.toString().padStart(1, 0)
  cuf += tipoEmision.toString().padStart(1, 0)
  cuf += codigoDocumentoFiscal.toString().padStart(1, 0)
  cuf += tipoDocumentoSector.toString().padStart(2, 0)
  cuf += nroFactura.toString().padStart(10, 0)
  cuf += puntoVenta.toString().padStart(4, 0)



  //let m11 = mod11(cuf, true, 9)
  let m11 = calculaDigitoMod11(cuf, 1, 9, false);
  //console.log(m11)

  cuf += m11.toString().padStart(1, 0)
  return cuf;
}




export function calculaDigitoMod11(dado, numDig, limMult, x10) {
  let mult, soma, i, n, dig
  if (!x10) {
    numDig = 1;
  }
  for (n = 1; n <= numDig; n++) {
    soma = 0;
    mult = 2;
    for (i = dado.length - 1; i >= 0; i--) {
      soma += (mult * Number(dado.substring(i, i + 1)));
      if (++mult > limMult) {
        mult = 2;
      }
    }
    if (x10) {
      dig = ((soma * 10) % 11) % 10;
    } else {
      dig = soma % 11;
    }

    if (dig == 10) {
      dado
        += "1";
    }
    if (dig == 11) {
      dado
        += "0";
    }
    if (dig < 10) {
      dado += dig.valueOf();
    }
  }
  return dado.substring(dado.length - numDig, dado.length);
}


export function Base16(pString) {

  var vValor = BigInt(pString);
  var hexString = vValor.toString(16).toUpperCase();
  return hexString;

}

export function hexStringToByteArray(hexString) {
  if (hexString.length % 2 !== 0) {
      throw "Must have an even number of hex digits to convert to bytes";
  }/* w w w.  jav  a2 s .  c o  m*/
  var numBytes = hexString.length / 2;
  var byteArray = new Uint8Array(numBytes);
  for (var i=0; i<numBytes; i++) {
      byteArray[i] = parseInt(hexString.substr(i*2, 2), 16);
  }
  return byteArray;
}

export function ConvertStringToHex(str) {
  var arr = [];
  for (var i = 0; i < str.length; i++) {
         arr[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
  }
  return  arr;
}


