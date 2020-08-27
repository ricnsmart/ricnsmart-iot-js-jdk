# RICNSmart-IOT-JS-SDK
javascript SDK for RICNSmart IOT

## 重要提示

使用javascript sdk将会暴露设备的apiKey到浏览器端，**`任何人通过浏览器查看源代码的功能都能得到accessKey和accessKeySecret`**。

如果非内部使用请慎重!!!


## 安装

```
npm install ricnsmart-iot-js-sdk
```

## API

```javascript
 // 初始化
RICNSmartApi.Init(accessKey, accessKeySecret, method, version)

// 请求数据
RICNSmartApi.GetOrganization(organizationId).then(
    res => {
        console.log(res)
    }, error => {
        console.log(error)
    })

```
