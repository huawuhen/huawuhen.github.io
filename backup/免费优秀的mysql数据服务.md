>免费优秀的mysql数据服务

## 1 简介

- tidbcloud提供全球各大节点的免费数据服务。
- 5G存储；每月50万请求；个人开发者足够了。
- 国内速度非常流畅延迟在100ms。

## 2 使用

### 注册账号

1. 打开主页[https://tidbcloud.com/](https://tidbcloud.com/) 注册。
2. 选择创建Clusters-Serverless免费-创建。
3. 进入创建的Clusters-点击右上角Connect-即可查看客户端链接信息

### 链接配置
Connection Type ：Public # 选择公开
Database ： #选择某个数据库
Operating System ： #选择客户端对应的环境
![image](https://pic.sl.al/gdrive/pic/2025-04-06/hash_6e2f16e1_431225fa0af5_newscreen13358515.jpg)
---
必须试tls链接，所以Operating System先选windows，下载证书
> Download the CA cert for server certificate verification and replace <CA_PATH> with your local path.
![image](https://pic.sl.al/gdrive/pic/2025-04-06/hash_5890149b_426621947748_newscreen13286390.jpg)
---
选择Ubuntu环境会给出链接url\port\user\passwd（密码只显示一次)\tls证书的位置；
![image](https://pic.sl.al/gdrive/pic/2025-04-06/hash_27ca7bf4_43bad2348cc6_newscreen13401515.jpg)
tls证书位置必须按照给出的地址存放；
---
如果你是docker应用请加一条 **volumes:**

`/etc/ssl/certs/ca-certificates.crt:/etc/ssl/certs/ca-certificates.crt`

环境变量：
` SQL_DSN=user:passwd@tcp(url:port)/数据库?tls=true  # 使用 TLS 连接`
---

###  其它

待续。。。：