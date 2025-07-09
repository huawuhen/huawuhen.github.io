# 💫 Gemini API 反向代理部署

> 🤔 gemini每个模型都有每日免费的API使用量
> 
> 📝 但是默认api url国内无法访问
> 
> 🔍 下面介绍几个反代方式，让国内流程使用api

# claw cloud 部署
使用到的项目：[https://github.com/wyeeeee/hajimi](https://github.com/wyeeeee/hajimi)
claw免费提供每月5USD的额度。
[https://console.run.claw.cloud/signin?link=EN09SD9KUFI7](https://console.run.claw.cloud/signin?link=EN09SD9KUFI7) 
使用链接注册我们彼此可获得5刀额度

---
### 创建
- App Launchpad -- Create App 
- Application Name：填写一个应用名称（必须为英文，且以小写字母开头）。
- Image Name：输入镜像地址 ghcr.io/wyeeeee/hajimi:latest
- cpu\ram按需配置
- 配置端口为 7860 且开启
![newscreen19104500.jpg](https://wp-cdn.4ce.cn/v2/WN1wCAn.jpeg)
---
![newscreen19125703.jpg](https://wp-cdn.4ce.cn/v2/TRA3cl7.jpeg)

---

- 环境变量：完整的变量参考项目主页[变量说明](https://github.com/wyeeeee/hajimi/releases/tag/settings)
所有的变量都有默认参数，只需要填写你想自定义的变量即可，如最简填写 `PASSWORD=123` `TZ=Asia/Shanghai` `GEMINI_API_KEYS=key1,key2,key3` 
![newscreen19598109.jpg](https://wp-cdn.4ce.cn/v2/PItv88f.jpeg)

---

项目输出的是兼容openai接口，部署完成后将claw给的免费地址填入openai兼容的客户端（如客户端没自动补全**v1/chat/completions**请手动），key填写变量配置的密码~另外直接打开地址可以看到web-ui显示一些基本信息 🚀

# ✨ cloudflare Ai网关 代理

- 🤖 cloudflare有个AI Gateway可以代理各大模型商的api_url
- ✍️ 但有网友反馈，AI Gateway会泄露客户端的ip给模型商的url
- 🎭 优点：简单，缺点：可能会被模型商封禁key。

登录[https://dash.cloudflare.com/](https://dash.cloudflare.com/)选择ai-AI Gateway-创建个网关-进入创建的网关页面-右上角API-平台选择google ai - 把API端点复制到支持google gemini的客户端替换官方的url即可




# 🚀 cloudflare Workers部署

- 🎯 免费比claw更稳定
-  依旧存在泄露客户端ip风险，但本人使用1年未见异常

步骤：
1. 创建workers - 跳过配置从hell word开始 - 部署
2. 进入项目 - 编辑代码 - 输入如下 - 最后点击部署
```
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.host = 'generativelanguage.googleapis.com';
    return fetch(new Request(url, request))
  }
}
```