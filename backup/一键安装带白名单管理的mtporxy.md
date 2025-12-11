# 介绍
https://github.com/Usagi537233/mtg-whitelist
一键安装Mtproxy&白名单管理系统，mtproxy协议早已被gfw针对检测，没有国内中转情况下很快会被封掉，但经过网友测试在防火墙白名单下很少被封。此项目便是一个白名单操作web前端，易操作随时添加&删除ip，当你手机5Gip变动时只需要打开网页一键添加当前ip。

# 安装
`bash <(curl -L -s https://ipsafev2.537233.xyz/install-mtg-spfw.sh)`
>请选择要使用的站点：**选择公益**
1) 公益站（https://ipsafev2.537233.xyz）
2) 专业站（https://ipm.537233.xyz）
输入 1 或 2 [1]: 1
[OK] 选择：公益站 (https://ipsafev2.537233.xyz)
**询问你目录和token如果第一次使用就选no**
是否已有 path 和 token? (y/n) [n]: n  
是否自定义 token? (y/n) [n]: n
**端口可默认或自定义**
> **最好给出你的目录id和token请牢记，后续经常用到**
OK] 已创建白名单文件夹
path: 01222931111
token: e2222c701111
[OK] 已将当前 IP 添加到白名单（如需其他 IP，请使用白名单管理链接）
请输入 SPFW 对外监听端口（默认 53766）

# 配置
脚本安装完会告诉你信息在`/root/mtg/link.txt`里面有telegram mtproxy一键链接，当然此时你时无法链接上，需要添加客户端的出口IP为白名单。
访问`https://ipsafev2.537233.xyz/目录id`例如：
[https://ipsafev2.537233.xyz/1111223656ba](https://ipsafev2.537233.xyz/1112293656ba)
填入**token**即可操作
![newscreen9324796.jpg](https://wp-cdn.4ce.cn/v2/PVJv1EO.jpeg)

# 其它
目前稳定的telegram内置代理的使用方法只有
- 国外鸡上部署socks&mtproxy，再利用gost、v2ray等隧道代理工具，链接国内鸡。
- 还有就是mtporxy只用ipv6访问

