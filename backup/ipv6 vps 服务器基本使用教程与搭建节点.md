# ipv6 vps 服务器基本使用教程与搭建vmess+ws+cdn节点

## 前提
你的网络要支持ipv6，不然ssh都链接不上，现在家用宽带都支持了，如果没开启请自行谷歌
## 换源
需要更换ipv6的更新源，不然apt安装很多软件报错
[清华https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)
注意ubuntu 24以上更新源格式不一样了， 修改的文件也变了
`/etc/apt/sources.list.d/ubuntu.sources`
## 配置DNS
你会发现运行很多脚本都报错，需要修改**ipv6 dns** 为支持**nat64**的
https://nat64.net/public-providers
这里找一个，修改`/etc/resolv.conf`
>我这个vps重启后resolv.conf会被强制重置默认 

## 安装s-ui
此刻你会发现自己终于可以正常脚本了，先跑个sui搭个节点。`bash <(curl -Ls https://raw.githubusercontent.com/alireza0/s-ui/master/install.sh)`
一路回车。

### 配置域名面板访问
安装完成会给出后台账户信息、登录地址，登录后台(注意ipv6的浏览器访问格式)，先配置个域名访问
设置-界面：端口443、域名：你cloudflare提前解析好的域名例如dash.abc.com并开启CDN（注意是aaaa解析)、ssl密钥证书（我直接使用cloudflare的证书，因为我要使用它的cdn翻墙）
![newscreen35405671.jpg](https://img.imgdd.com/37e555ea-269d-4e64-a5da-e58e7cdfda5a.jpg)

设置-订阅：端口默认、域名、证书填入，域名不要和界面的一样例如proxy.abc.com
重启面板
![newscreen35614843.jpg](https://img.imgdd.com/dd5b307f-2891-44bd-ba79-40d0a1b68c02.jpg)

使用https://dash.abc.com/app访问后台

### 配置节点
1. 创建TLS
TLS设置-添加；名称：随意；证书：使用上面proxy.abc.com证书；允许不安全：打开；TLS选项：打开SIN；SIN：填写订阅的域名proxy.abc.com；
![newscreen35902000.jpg](https://img.imgdd.com/97d73fbe-8cbf-4153-a658-c7dcb37e7f8b.jpg)
2. 创建入站
入站管理-添加；类型：vmess；标签：随意；
---
端口这里着重说下：**不能随便填，使用cloudflare CDN 就需要填 cloudflare 443系的端口**
- cf 443HTTPS系端口范围
443、2053、2083、2087、2096、8443
- cf 80HTTP系端口范围
80、8080、8880、2052、2082、2086、2096
443我配置dash.abc.com时已经用了，这里我们用2053端口。

---

启用传输；类型：websocket；http请求路径：随便我填的 `/vleees` ； 主机域名：填写proxy.abc.com；
![newscreen37009937.jpg](https://img.imgdd.com/415edcc8-3e13-44a8-b33a-1ce04add9153.jpg)
启用TLS：选择创建的TLS![newscreen37046703.jpg](https://img.imgdd.com/cd19694d-aa7b-448c-b251-de4f70b1aeec.jpg)

3. 用户管理 - 添加个用户-入站标签选择第二部创建的入站-二维码订阅链接拷贝到客户端，完工；



# 参考
- [linuxdo佬友](https://linux.do/t/topic/1256006/19)
- [https://www.youtube.com/watch?v=k0t24bLFyCs](https://www.youtube.com/watch?v=k0t24bLFyCs)
- [https://www.youtube.com/watch?v=6l01iAgKglY&t=752s](https://www.youtube.com/watch?v=6l01iAgKglY&t=752s)
- 
