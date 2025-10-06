# docker部署基于discord的免费图床
## 前言
- 基于discord频道无限容量
- 支持多种格式图片、视频、音频
## 部署
### 准备
- discord创建频道获取到ID
- 创建机器人获取token
- 机器人加入创建的频道
- 上面不会百度discord+coze

## docekr
创建个目录，新建yml文件
```
services:
  discord-image:
    image: ghcr.io/missuo/discord-image
    ports:
      - "8080:8080"
    environment:
      - BOT_TOKEN=MTIyMTM3NDMxxxxxxxxxxJSTiZo6dAJlNcxSg1ql8BOutdo5_-Wo9t3I
      - CHANNEL_ID=1156xxxxxxx42
      - UPLOAD_DIR=/app/uploads
      #- PROXY_URL=your_proxy_url # If you want to access in mainland China, you must set this item.
      - AUTO_DELETE=true
    volumes:
      - ./uploads:/app/uploads
	  
```
启动后，`IP：8080`测试打开
## edgeone回源配置
> 这里我为了方便直接用了腾讯海外版的CDN回源访问，没有配置nginx也不用申请ssl，当然下面也给了nginx配置参考

- 源站配置：你的vps-ip
- 回源协议:http
- 回源端口：服务访问的端口，本教程是8080
![CDN配置](https://wp-cdn.4ce.cn/v2/hEJb0sy.jpeg)
- 配置ssl
![edgeone-ssl配置](https://wp-cdn.4ce.cn/v2/0wXweDY.jpeg)

## nginx配置
```
location / {
    proxy_pass http://localhost:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
    proxy_http_version 1.1;
} 
```
