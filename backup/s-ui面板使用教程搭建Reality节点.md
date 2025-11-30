## 安装sui
项目：https://github.com/alireza0/s-ui

`bash <(curl -Ls https://raw.githubusercontent.com/alireza0/s-ui/master/install.sh)`

提示**Do you want to continue with the modification [y/n]? :**直接回车。

安装完成给出账号密码、内外网访问地址
> this is a fresh installation,will generate random login info for security concerns:
###############################################
username:Hxxxxxar
password:cxxxxezT
###############################################
if you forgot your login info,you can type s-ui for configuration menu
reset admin credentials success
First admin credentials:
	Username:	 Hlxar
	Password:	 cjxT
Created symlink /etc/systemd/system/multi-user.target.wants/s-ui.service → /etc/systemd/system/s-ui.service.
s-ui v1.2.2 installation finished, it is up and running now...
You may access the Panel with following URL(s):
Local address:
http://192.xx.2x4.96:2095/app/
Global address:
http://192.2xx.2xx4.96:2095/app/

## 配置面板&节点

按地址访问（记得防火墙先关闭）

### 配置reality协议 
**下面每个字都需要认真看**
第一步：
面板后台TLS设置 - 添加 -名称随意-选择reality-sin和握手服务器填写一个延迟低的域名-服务器端口建议443-点击生成私钥&公钥-TLS选项启用UTLS 保存![批注 2025-11-30 124200.png](https://img.imgdd.com/d19f584d-ebf2-4e75-9b2f-37d83f095484.png)
第二步：
入站管理-添加-类型vless-标签名称随意-端口443(这里可以设置其他端口这样服务器的443就不会占用还能创建其他web项目，当然玄学上讲443被识别率低)-tls模板选择上步创建的reality tls - 保存![批注 2025-11-30 1242010.png](https://img.imgdd.com/8253a081-b3b9-4a8f-81f4-4faa750a36b0.png)
第三步：
用户管理-添加-入站标签选择第二步创建的入站管理标签名称 - 保存

---
# 测试最优域名
https://bulianglin.com/archives/nicename.html
在你的vps上执行Reality目标域名



