# locyanfrp内网穿透docker教程
## 前言
locyanfrp是一个免费内网穿透平台，相比目前存在的免费平台，locyanfrp签到赠送的流量更大，功能限制更小。但是官方的客户端使用并没有提供docker教程。
## 获取配置
创建隧道后，点击隧道-配置文件-按隧道获取配置。注意甄别是老版本的ini还是新版toml
- ini格式
> [common]
server_addr = cn-hb-wh-1.lcf.im
server_port = 2333
tcp_mux = true
protocol = tcp
user = d49

>[fnnas]
privilege_mode = true

- toml格式
> serverAddr = 's1.ccgg.cc'
serverPort = 2333
user = 'fdef7d3824f'

>[auth]
method = 'token'
token = 'M'

>[[proxies]]
name = 'fn-web'
type = 'tcp'

>localIP = '127.0.0.1'
localPort = 5667
remotePort = 57846

本地创建frpc.ini或frpc.toml并复杂配置。

## 启动容器

老版本`docker run --restart=always --network host -d -v <挂载的frpc.ini本地路径>:/app/frpc.ini --name frpc morikawa56/frpc:0.51.3-amd64`

新版`docker run --restart=always --network host -d -v <挂载的frpc.toml本地路径>:/app/frpc.toml --name frpc morikawa56/frpc:0.61.2-amd64`

