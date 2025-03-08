# 前言
本项目支持多种平台搭建和数据存储，本教程为利用cloudflare免费的边缘计算、R2存储部署。

# 部署
先克隆项目[CloudFlare-ImgBed](https://github.com/MarSeventh/CloudFlare-ImgBed) ,打开cloudflare--Workers和Pages--创建--Pages--连接到git--绑定github--选择刚克隆的imgbed项目--构建命令 `npm install` .

## 绑定KV
在cloudflare里--存储和数据库--KV--创建一个名字随便。回到刚才部署好的pages项目--设置--绑定--添加--KV命名空间--变量名称添加` img_url ` --KV命名空间选择刚创建的KV。
![ca5ad1bea78e4c6098056d1f78f685f2.png](https://tu.homwei.my/file/1741431899033_ca5ad1bea78e4c6098056d1f78f685f2.png)

## 重新部署
此操作是我们经常需要的，修改cloudflare里项目的设置、github里项目的变动都需要操作。github项目里的变动一般cloudflare里会自动重新部署。
在cf对应项目的管理页，最新一次部署后面的···->重试部署，如图：
![9d07266a8cbf46c28cae5c87dff6aff1](https://photo.459122.xyz/i/c8ba42554b59bac9bfb650b6ab7308bd.png)

## 创建与绑定R2存储桶
在cloudflare里--R2对象存储-概述--创建存储桶--名字随意，其它保持默认即可。需要说明的时创建R2需要cloudflare账户绑定信用卡。

回到cloudflare项目管理也，就是上步骤绑定KV空间的那里，添加--选择R2存储桶--名称img_r2--选择刚创建的R2存储
![image](https://pic.sl.al/gdrive/pic/2025-03-08/hash_6d84f3da_763908cb8070_d78b61c538f548efba96f89745e0652d.png)

# 完成
此时打开cloudflare分配的二级域名已经可以正常打开并上传了，需要注意的时cloudflare分配的二级域名国内无法正常访问的。
## 添加自定义域名
为解决cloudflare分配的二级域名无法访问，我们自定义域名可解决。前提你的域名托管在cloudflare。

在cloudflare的项目管理页面--自定义域--设置域名，假设你的test.com域名托管在cloudflare，这里直接填写二级域名tu.test.com即可，dns解析设置cloudflare会自动为你完成。

## 配置后台管理账号与上传密码
打开图床--右下角找到设置--点击管理页面--默认账户密码留空即可登录
![d4dadb31dbc24965beabd41134433f77](https://photo.459122.xyz/i/8f53ad53ae526c807fd10ab95b8d5996.png)
进入系统设置--安全设置--管理端认证--配置用户名密码即可。
![074189db0edd4609a1ddd93b67f84a26](https://photo.459122.xyz/i/2ca7bbcbfe06a5e87a0711230ebcea9b.png)
这里同样可以设置长传认证码，强烈建议设置，设置-上传密码--即可，设置完后匿名打开网站会弹出需认证-输入上传密码即可。
![image](https://pic.sl.al/gdrive/pic/2025-03-08/hash_0a7b87db_773628dabc1a_newscreen10674781.jpg)

# API
相关API参数可查看github项目页面说明 [https://github.com/MarSeventh/CloudFlare-ImgBed](https://github.com/MarSeventh/CloudFlare-ImgBed)
