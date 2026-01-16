# VPS测试
## NodeQuality 首推
```
bash <(curl -sL https://run.NodeQuality.com)
```
### 融合怪脚本
```
curl -L https://gitlab.com/spiritysdx/za/-/raw/main/ecs.sh -o ecs.sh && chmod +x ecs.sh && bash ecs.sh -m 1
```
### 解锁测试（第一步选只跨国平台)
` bash <(curl -sL Media.Check.Place) `

# 基本设置
## 设置时区
` timedatectl set-timezone Asia/Shanghai `
## bbr加速
` curl -Lso bbrinstall.sh https://git.io/kernel.sh  && chmod +x bbrinstall.sh && ./bbrinstall.sh `
## 强烈更改SSH默认端口
```
# 意修改默认22为2222
sudo sed -i 's/^#Port 22/Port 2222/' /etc/ssh/sshd_config
```
## 安装ufw防火墙
`apt install ufw -y`
**ufw防火墙基本规则**
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
## 安装fail2ban
`wget https://raw.githubusercontent.com/huawuhen/Fail2ban/refs/heads/master/fail2ban.sh && chmod +x fail2ban.sh && bash fail2ban.sh`

更多vps安全设置[linuxdo服务器安全配置](https://linux.do/t/topic/267502)


## bash美化
在root目录下以root账户运行
`git clone https://github.com/ohmybash/oh-my-bash.git ~/.oh-my-bash && cp ~/.oh-my-bash/templates/bashrc.osh-template ~/.bashrc && source ~/.bashrc`

> 卸载
> `~/uninstall_oh_my_bash`


---
# 基本软件安装
## lrzsz\htop
` apt-get install lrzsz -y && apt-get install htop -y `
## Docker安装
` curl -fsSL https://get.docker.com  | sh - `
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
[reality目标域名](https://bulianglin.com/archives/nicename.html)

2. 八合一
[https://github.com/mack-a/v2ray-agent](https://github.com/mack-a/v2ray-agent)

