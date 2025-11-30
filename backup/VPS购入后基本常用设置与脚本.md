# VPS测试
## 融合怪脚本-首推
```
curl -L https://gitlab.com/spiritysdx/za/-/raw/main/ecs.sh -o ecs.sh && chmod +x ecs.sh && bash ecs.sh -m 1
```
## 三网测速
` bash <(curl -sL https://raw.githubusercontent.com/i-abc/Speedtest/main/speedtest.sh) `
` bash <(curl -Lso- https://www.infski.com/files/superspeed.sh) `
## 测速回国路由
` wget -qO- git.io/besttrace | bash `
## 解锁测试（第一步选只跨国平台)
` bash <(curl -sL Media.Check.Place) `

# 基本设置
## 设置时区
` timedatectl set-timezone Asia/Shanghai `
## 更改SSH默认端口
通过` bash <(curl -sL kejilion.sh) ` 脚本更改
## 安装ufw防火墙
`apt install ufw -y`
### ufw防火墙基本规则
```
# 默认允许所有数据出站
ufw default allow outgoing
# 默认禁止所有数据入站
ufw default deny incoming
# 允许22端口的tcp协议访问并记录日志，这里建议改成修改后的SSH端口
ufw allow log 22/tcp
# 允许443端口访问，没指定协议即包括TCP/UDP
ufw allow https
# 配置规则后重新加载
ufw reload
--- 上面即基本设置 新VPS这样设置就可以了 ---
ufw allow http # 允许80端口，不建议，所有应用使用ssl安全
# 允许从start_port到end_port的端口
sudo ufw allow start_port:end_port
# 仅允许1.1.1.1访问22端口
ufw allow from 1.1.1.1 to any port 22
ufw allow from 1.1.1.1 to proto tcp any port 22 # 指定tcp协议
```
更多vps安全设置[linuxdo服务器安全配置](https://linux.do/t/topic/267502)
## bbr加速
` bash <(curl -Lso- https://git.io/kernel.sh) `
---
# 基本软件安装
## lrzsz字符串传输
` apt-get install lrzsz -y `
## HTOP直观的系统状态
` apt-get install htop -y `
## Docker安装
` curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh `
会自动安装 Docker Compose 组件，调用命令是：docker compose。
### 安装docker 管理（国内镜像加速）
1. dpanel推荐
```
docker run -d --name dpanel --restart=always \
 -p 8807:8080 -e APP_NAME=dpanel \
 -v /var/run/docker.sock:/var/run/docker.sock -v dpanel:/dpanel \
 dpanel/dpanel:lite
```
国内安装
```
docker run -d --name dpanel --restart=always \
 -p 8807:8080 -e APP_NAME=dpanel \
 -v /var/run/docker.sock:/var/run/docker.sock -v dpanel:/dpanel \
 dpanel/dpanel:lite
```
2. 老牌pt
` docker run -d --restart=always --name="portainer" -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock registry.cn-hangzhou.aliyuncs.com/huawuhen-ci/huawuhendocker:latest `

## Caddy 安装
` bash <(curl -Ls https://git.huawuhen.online/installcaddy.sh) `

# 安装代理
1. 推荐Reality
` wget https://raw.githubusercontent.com/yeahwu/v2ray-wss/main/tcp-wss.sh && bash tcp-wss.sh `