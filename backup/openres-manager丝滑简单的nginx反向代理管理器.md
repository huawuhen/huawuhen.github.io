> openres-manager丝滑简单的nginx反向代理管理器

# 前言

现在我们大部分应用都采用快捷的docker部署，然后使用nginx\caddy等web服务进行反代容器端口，nginx这些服务软件反代只是其中一个功能，我们要只用反代并对反代进行配置优化对于小白和频繁使用用户也很麻烦，openresty则是用一种更简洁、简单的方式去只添加、管理nginx反向代理，并针对反代的上游负载、安全防护等都小白化处理，鼠标点击即可完成配置。

# 安装openresty

## 源码安装
推荐，本文以此方式演示

`sudo bash -c "$(curl -fsSL https://om.uusec.com/installer_cn.sh)"`

## docker安装
`sudo bash -c "$(curl -fsSL https://om.uusec.com/docker_installer_cn.sh)"`

## 进入

输入ip:34567进入openresty管理界面，openresty会占用80 443 34567端口注意提前预留。默认账号密码admin\#Passw0rd
记得修改密码。

# 配置openresty

- 第一步：申请ssl证书（证书会自动更新），点击网址证书 -- 新建 -- 名称随意这里写hive -- 域名（域名提前做好解析） -- 邮箱（随便输入） -- 提交即可![1wscreen12430140.jpg](https://tc.668884.xyz/file/1747556214890_1wscreen12430140.jpg)

- 第二步：添加上游服务，点击上游服务（上游即反代的服务器如你的docker应用可以是本地也可以是远程） -- 新建 -- 名称随意(演示我写的是hibe) -- 轮询方式如果配置多个上游可选择轮询，一般默认 -- 系统默认给了两个一个是127.0.0.1:8080，一个是域名，我们演示只代理本机的docker应用，删除域名只保留127.0.0.1:8080(如何docker方式不要填127.0.0.1），如果你本机部署了多个同样应用的docker，可继续添加 如 127.0.0.1:8081，127.0.0.1:8082. -- 最后提交![2screen12491390.jpg](https://tc.668884.xyz/file/1747556265624_2screen12491390.jpg)

- 第三步：网站添加， 点击网站管理 -- 新建 -- 名称随意 -- 域名输入刚才申请证书的域名 -- 勾选强制SSL，其它HSTS\IPV6按需配置 -- 强制SSL了就删除80端口 -- 网站证书选择第一步申请证书时起的那个名称 -- 上游服务选择第二部新建时起的名称 -- 完成
![333creen12558609.jpg](https://tc.668884.xyz/file/1747556340661_333creen12558609.jpg)

---
## 其它配置

访问控制：可以进行地区、IP等灵活限制；
CC防护：可以进行简单攻击防护配置；![newscreen12652328.jpg](https://tc.668884.xyz/file/1747556477421_newscreen12652328.jpg)

---

## 参考

[项目](https://github.com/Safe3/openresty-manager)