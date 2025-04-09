# 前言

> LibreTV是一个轻量级、免费的在线视频搜索与观看平台，提供来自多个视频源的内容搜索与播放服务。无需注册，即开即用，支持多种设备访问。项目采用纯前端技术构建，可轻松部署在各类静态网站托管服务上。 🌟

# 部署

## docker部署

` docker run -d --name libretv -p 8080:80 bestzwei/libretv:latest `

此时ip:8080已经可以打开了。

### 反代
为了安全性增加个反向代理，前提你有域名；
域名解析到服务器ip；这里以caddy为例，如何安装请问ai。

caddy配置如下：

```js

https://play.huawuhen.site
encode gzip
reverse_proxy http://127.0.0.1:8080
basicauth * {
admin $2a$14$ue1szd5rmFqkNXFvgZoNHOJd58vKhS2aUUnfdyu7P6K16IGbTyZxx
}
```

增加了 **basicauth** 块这样需要输入认证才可正常打开网站；毕竟盗版影视嘛，自己看看得了。admin：是用户名可自定义，
> $2a$14$ue1szd5rmFqkNXFvgZoNHOJd58vKhS2aUUnfdyu7P6K16IGbTyZxx

> 这个编码是加密的密码，通过` caddy hash-password ` 生成输入后提示让你输入两次密码，然后就会给出加密编码。

---
还蛮流程的，资源也挺新，而且似乎流量并没有经过我的服务器网卡；

![newscreen33056765](https://photo.459122.xyz/i/6995212091c34437ebf0f81acef500a5.jpg)

![网卡实时](https://photo.459122.xyz/i/69681be319ec7c89c97d1ac5afa2a328.jpg)

---

## pages部署
虽然省略的服务器的费用，但是cloudflare在国内的速度有点抽风呀。

步骤：克隆仓库-- cloudflare--workers and pages --- 创建 -- pages -- 链接github--选对应的仓库 --- 开始设置 --- 默认部署选项留空皆可

给的三级域名国内无法访问，自定义域一下，前提你的域名托管在cf。