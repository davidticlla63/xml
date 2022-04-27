var crypto = require('crypto')
  , fs = require('fs')

export function fileHash(filename, algorithm) {
  /*   const fileBuffer = fs.readFileSync('./package.json');
  const hashSum = crypto.createHash('sha256'); */
  const Securitykey = 'erp360';
  const fileBuffer = fs.readFileSync(filename);

  //console.log(fileBuffer)
  const hashSum = crypto.createHash(algorithm,Securitykey);
  //hashSum.update(fileBuffer);

  const hex = hashSum.digest('hex');
  //console.log(hashSum)
  return hex;
}

export function fileHashDescipher(encryptedData){
  const Securitykey = 'erp360';
  const algorithm='sha256';
  const resizedIV = Buffer.allocUnsafe(16);
  const decipher = crypto.createDecipheriv(algorithm, Securitykey,resizedIV);

let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

decryptedData += decipher.final("utf8");

console.log("Decrypted message: " + decryptedData);
}

/* export function fileHash0(filename, algorithm = 'md5') {
  return new Promise((resolve, reject) => {
    // Algorithm depends on availability of OpenSSL on platform
    // Another algorithms: 'sha1', 'md5', 'sha256', 'sha512' ...
    
    let shasum = crypto.createHash(algorithm);
    try {
      let s = fs.ReadStream(filename)
      s.on('data', function (data) {
        shasum.update(data)
      })
      // making digest
      s.on('end', function () {
        const hash = shasum.digest('hex')
        return resolve(hash);
      })
    } catch (error) {
      return reject('calc fail');
    }
  });
} */