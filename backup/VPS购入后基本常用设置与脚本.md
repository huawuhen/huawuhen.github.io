# 第一：脚本
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


# 设置时区
` timedatectl set-timezone Asia/Shanghai `

# Docker安装
` curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh `
会自动安装 Docker Compose 组件，调用命令是：docker compose。
## 安装docker 管理（国内镜像加速）
1. dpanel推荐
```
docker run -d --name dpanel --restart=always \
 -p 8807:8080 -e APP_NAME=dpanel \
 -v /var/run/docker.sock:/var/run/docker.sock -v dpanel:/dpanel \
 registry.cn-hangzhou.aliyuncs.com/dpanel/dpanel:lite
```
2. 老牌pt
` docker run -d --restart=always --name="portainer" -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock registry.cn-hangzhou.aliyuncs.com/huawuhen-ci/huawuhendocker:latest `

# 安装代理
` wget https://raw.githubusercontent.com/yeahwu/v2ray-wss/main/tcp-wss.sh && bash tcp-wss.sh `

# bbr加速
` bash <(curl -Lso- https://git.io/kernel.sh) `
