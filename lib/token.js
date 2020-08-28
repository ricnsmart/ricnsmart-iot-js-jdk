'use strict';

const HmacSHA1 = require('crypto-js/hmac-sha1');
const Base64  = require('crypto-js/enc-base64');

const NewSignatureWithTimestamp = (accessKey, accessKeySecret, method, version, timestamp) => {
    const key = Base64.parse(accessKeySecret);
    const stringForSignature = accessKey + '\n' + timestamp + '\n' + method + '\n' + version;
    return Base64.stringify(HmacSHA1(stringForSignature, key));
}

const NewToken = (accessKey, accessKeySecret, method, version, timestamp) =>{
    const signature = NewSignatureWithTimestamp(accessKey, accessKeySecret, method, version, timestamp);
    return 'accessKey=' + encodeURIComponent(accessKey) + '&version=' + encodeURIComponent(version) + '&method=' + encodeURIComponent(method) +
        '&timestamp=' + encodeURIComponent(timestamp) + '&signature=' + encodeURIComponent(signature);
}

module.exports = NewToken;
