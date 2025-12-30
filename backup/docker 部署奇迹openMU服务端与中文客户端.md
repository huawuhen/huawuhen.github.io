
# 部署服务端

## 前提
以下端口确保未被占用
5080|8080|55901
55902|55903|55904
55905|55906|44405
44406|55980

## 创建数据目录，修改密码

创建一个目录存放持久化文件，例：
` mkdir -p /root/docker-file/openmu/dbdata`
**dbdata**:为空目录为后续数据库固化用；
**openmu目录** : `nginx.dev.conf` `.htpasswd` 两个文件拷贝到这里；并且yml文件也创建在这里；
**.htpasswd文件**：是web面板的密码，如需修改使用Bcrypt密码在线生成工具，得到加密后的密文替换即可
```
admin:$2y$10$xYL2d/QEukwGmX0uNZubsunL0qcANuTYkpapRVdlu5q3ymCpvOEh.
```
替换admin:后面的密文即可

## 创建compose.yml
创建后`docker compose up -d`运行
```
services:
  nginx-80:
    image: nginx:alpine
    container_name: nginx-80
    ports:
      - "5080:80"
    volumes:
      - ./nginx.dev.conf:/etc/nginx/nginx.conf:ro
      - ./.htpasswd:/etc/nginx/.htpasswd
    depends_on:
      - openmu-startup

  openmu-startup:
    image: munique/openmu
    container_name: openmu-startup
    ports:
      - "8080"
      - "55901:55901"
      - "55902:55902"
      - "55903:55903"
      - "55904:55904"
      - "55905:55905"
      - "55906:55906"
      - "44405:44405"
      - "44406:44406"
      - "55980:55980"
    environment:
      DB_HOST: database
      ASPNETCORE_URLS: http://+:8080
    working_dir: /app/
    volumes:
      - ./.htpasswd:/etc/nginx/.htpasswd
    depends_on:
      - database

  database:
    image: postgres
    container_name: database
    environment:
      POSTGRES_PASSWORD: admin
      POSTGRES_DB: openmu
      POSTGRES_USER: postgres
    ports:
      - "5432"
    volumes:
      - dbdata:/var/lib/postgresql #store data on volume

volumes:
  dbdata:
  ```
## 配置服务端
ip:5080打开服务管理面板，输入账户密码。
菜单选择 Game Configuration - System 
**IP Resolving** :改成 Custom
**Custom IP / Hostname**：填写服务器ip
**Auto Start**：启用
**Auto Update Database Schema**：启用

![服务器设置](https://img.imgdd.com/95ba46f9-bfa6-4290-b968-1621b032ffcb.jpg)

---
再创建个账户；菜单选择 Accounts - Create - 输入用户/密码等信息即可

![创建用户步骤](https://img.imgdd.com/1e720f29-f7bf-415d-ac4f-316be2e4d6b6.jpg)

![创建用户.jpg](https://img.imgdd.com/750b1992-a2ac-47f3-8cab-e862a24122b9.jpg)

好了，可以下载客户端游玩了；
> 管理面板浏览器翻译工具翻译下，还有很多对游戏设置，自行摸索吧
![管理面板.jpg](https://img.imgdd.com/520be959-3d70-444b-98a5-8929960b4ccc.jpg)

## 配置客户端
下载：https://pan.quark.cn/s/3fc97cb0f7f7

解压打开登陆器点击**+**添加个服务器，输入服务端的IP即可；
![](https://img.imgdd.com/b3bae4ae-a05d-41db-810a-8f95d1992f26.jpg)

![](https://img.imgdd.com/de64c682-d3bb-410f-b50c-235598f91054.jpg)

**Launch Client**启动游戏

![newscreen34716953.jpg](https://img.imgdd.com/90f02cd2-40c9-4461-a2f6-ed75797934c4.jpg)

![newscreen35760453.jpg](https://img.imgdd.com/5bb832b9-ba8e-4eb0-95da-eec74c266f5d.jpg)

end 
## 其它
1. [项目github](https://github.com/MUnique/OpenMU)
2. [Bcrypt在线加解密](https://www.bejson.com/encrypt/bcrpyt_encode/)
