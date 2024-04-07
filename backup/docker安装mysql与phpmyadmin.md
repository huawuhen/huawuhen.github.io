# 准备
- docker环境
# 安装mysql
` docker run --name mysql -p 3307:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7 `
12345是root密码
为了轻便使用了旧版本5.7，故没用映射本地文件
> 新版带映射
docker run -d --name mydb -v mysql:/var/lib/mysql -p 3307:3306 -e MYSQL_ROOT_PASSWORD=zou123456 mysql

## 创建数据库
` docker exec -it mysql /bin/bash ` # 进入容器
` mysql -uroot -p ` # 以root用户进入数据库，然后输入密码即可
```
-- 建库
create database `db_name`; # 创建
SET character_set_client = utf8; # 设置字符串
use db_name; # 使用这个数据库
```
# 安装phpmyadmin
一款mysql在线web版管理软件
` docker run --name myadmin -d -e PMA_ARBITRARY=1 -p 8080:80 phpmyadmin/phpmyadmin `
PMA_ARBITRARY=1代表可以链接本机以外的数据库
8080可以自定义
---
完结，有问题https://t.me/huahuashare
![](https://tu1.homwei.link/file/0009d5cfadbd2a7ac0653.jpg)