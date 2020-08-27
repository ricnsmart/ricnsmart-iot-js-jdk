'use strict';

const NewToken = require('./token');
const axios = require('axios')

const RICNSmartApi = {
    host: 'http://gateway.ricnsmart.com:3500/iot',
    token: ''
}

RICNSmartApi.Init = (accessKey, accessKeySecret, method, version) => {
    RICNSmartApi.token = NewToken(accessKey, accessKeySecret, method, version, new Date().getTime())
}

RICNSmartApi.GetOrganization= (organizationId) => {
    return axios.get(RICNSmartApi.host + '/organization?organization_id=' + organizationId + '&' + RICNSmartApi.token)
}

module.exports = RICNSmartApi;

// Allow use of default import syntax in TypeScript
module.exports.default = RICNSmartApi;

