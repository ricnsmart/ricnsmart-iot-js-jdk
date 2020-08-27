const RICNSmartApi = require('../lib/api');

const accessKey = "XH3yWTwtoUuVoYcZc08gMkrX"
const accessKeySecret = "9H0lIwNbhQ0KaS3q6kGNutIUHBFf4JJq"
const method = "sha1"
const version = "2018-10-31"
const organizationId = 1

function Init() {
    RICNSmartApi.Init(accessKey, accessKeySecret, method, version)
}

function GetErrorMessage(status) {
    switch (status) {
        case 400:
            return '请求出错';
        case 401:
            return '未授权，请登录';
        case 403:
            return '拒绝访问';
        case 404:
            return '请求地址出错';
        case 408:
            return '请求超时';
        case 500:
            return '服务器内部错误';
        case 501:
            return '服务未实现';
        case 502:
            return '网关错误';
        case 503:
            return '服务不可用';
        case 504:
            return '网关超时';
        case 505:
            return 'HTTP版本不受支持';
        default:
            return `未知的错误状态：${status}`
    }
}

test('GetOrganization', () => {
    Init()
    return RICNSmartApi.GetOrganization(organizationId).then(res => {
        const {data, status} = res
        expect(status).toBe(200);
        const {message} = data
        expect(message).toBe("OK");
        expect(data.data.id).toBe(organizationId)
    }, error => {
        if (error && error.response) {
            console.log(GetErrorMessage(error.response.status) + ":" + error.response.data.message)
        }
        expect(error).toBeNull()
    })
});
