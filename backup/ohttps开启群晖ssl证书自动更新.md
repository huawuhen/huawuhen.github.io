# 开启群晖ssl证书自动更新OHTTPS

ohttps是一个免费自动签发ssl证书、管理、部署的项目。
[https://ohttps.com](https://ohttps.com?invitationCode=mlyxprovnon0ez6j)
本文举例以ohttps项目自动部署、更新群晖的ssl证书。

## 部署

1. 签发证书
打开ohttps-证书管理-创建证书-按你实际情况创建证书。
2. 创建部署节点
打开Ohttps-部署节点-添加-选择群晖-生成令牌（备用）-选择域名证书-创建。
3. 群晖docekr安装Ohttps启动容器
```
docker run -d --restart always \
    --network host \
    -e PUSH_NODE_ID="push-53ejqm8p60gd7no9" \
    -e PUSH_NODE_TOKEN="6b2440b1e3f180a3c9453f9d7766a565" \
    -e SYNO_USERNAME="ohttps" \
    -e SYNO_PASSWORD="1h^.Uih2-8hAf9wt.0ekjZa^2s%@t33d" \
    --name ohttps \
    ohttps/ohttps-synology
```    
 
- PUSH_NODE_ID:ohttps部署节点的id，创建后可以看到；
- PUSH_NODE_TOKEN：ohttps创建部署节点时生成的32bit令牌；
- SYNO_USERNAME：群晖的账号（必须在administrator组）
- SYNO_PASSWORD：群晖账号的密码
- 网络选择host即与宿主机同网络
- 如何用群晖图形化工具创建时勾选高权限

4. 部署证书
打开ohttps-证书管理-选择对应域名-部署证书-选择节点，正常会反馈部署成功，且以后证书到期后会自动部署到群晖。

## 参考
[https://ohttps.com/docs/cloud/synology/nas](https://ohttps.com/docs/cloud/synology/nas)

---

## ssh方式部署
ohttps支持ssh链接部署，此方式可用于vps，云服务器。
毕竟简单大致说下重点；
创建部署节点-ssh-用户名即vps的我这里选择root - 主机地址 -- 端口号即ssh端口默认22 -- 链接方式根据实际情况，我这里选择密码 -- 密码即root用户密码 -- 前置命令：这里要用cd命令进入一个文件夹用来存放ohttps自动生成的证书，前置命令走完后，ohttps会自动创建一个证书ID命名的文件夹并在文件夹里写入证书文件。 -- 后置命令即最后需要执行的命令 可以写 nginx -s reload 也可留空 。

最后记得修改conf配置里的证书位置。
