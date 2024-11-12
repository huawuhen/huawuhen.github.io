# 前言
新开了一个rack家的机，开好IP就默认被墙，多次沟通、工单均无果，垃圾客服；网上查下，目前流行的拯救被墙IP方法是argo隧道方法；还有搭建xui 创建socket5 (使用外网登录或者cf-tunnel方式登录面板)， 然后使用cf-vless,项目 github搜这个 cmliu/edgetunnel ，在里面填SOCKS5变量；本文介绍前者更简单。
# 部署
通过代理ORweb vnc链接被墙的VPS；默认直接运行 ` bash <(curl -Ls https://github.com/eooce/xray-2go/raw/main/xray_2go.sh) ` 一键安装。结束后给出信息如下：

> vless://802c2805-9cf69-8abf-677cd274f111@142.171.3.170:38349??encryption=none&security=reality&sni=www.iij.ad.jp&fp=chrome&pbk=oQWv9kW8FUF_N5WfyeCvra7-vwDLW80Ls8q1f1q3Fjc&allowInsecure=1&type=grpc&authority=www.iij.ad.jp&serviceName=grpc&mode=gun#US-Multacom_Corporation

> vless://802c2805-abf-677cd274f111@www.visa.com.tw:8443?encryption=none&security=tls&sni=shopping-tiger-incorporate-centered.trycloudflare.com&type=ws&host=shopping-tiger-incorporate-centered.trycloudflare.com&path=%2Fvless%3Fed%3D2048#US-Multacom_Corporation

> vmess://eyAidiI6ICIyIiwgInBzIjogIlVTLU11bHRhY29tX0NvcnBvcmF0aW9uIiwgImFkZCI6ICJ3d3cudmlzYS5jb20udHciLCAicG9ydCI6ICI4NDQzIiwgImlkIjogIjgwMmMyODA1LTljODYtNGY2OS04YWJmLTY3N2NkMjc0ZjExMSIsICJhaWQiOiAiMCIsICJzY3kiOiAibm9uZSIsICJuZXQiOiAid3MiLCAidHlwZSI6ICJub25lIiwgImhvc3QiwgInNuaSI6ICJzaG9wcGluZy10aWdlci1pbmNvcnBvcmF0ZS1jZW50ZXJlZC50cnljbG91ZGZsYXJlLmNvbSIsICJhbHBuIjogIiIgfQo=

> vmess://eyAidiI6ICIyIiwgInBzIjogIlVTLU11bHRhY29tX0NvcnBvcmF0aW9uIiwgImFkZCI6ICJ3d3cudmlzYS5jb20udHciLCAicG9ydCI6ICI4NDQzIiwgImlkIjogIjgwMmMyODA1LTljODYtNGY2OS04YWJmLTY3N2NkMjc0ZjExMSIsICJhaWQiOiAiMCIsICJzY3kiOiAiYXV0byIsICJuZXQiOiAic3BsaXRodHRwIiwgInR5cGUiOiAibm9uZSIsICJob3NNob3BwaW5nLXRpZ2VyLWluY29ycG9yYXRlLWNlbnRlcmVkLnRyeWNsb3VkZmxhcmUuY29tIiwgImFscG4iOiAiIiB9Cg==
> 温馨提醒：如果是NAT机,reality端口和订

第一个是IP直连多半连不上，后面几个都是套了cf的优选。

也可在运行脚本是配置参数：
` PORT=8888 CFIP=www.visa.com.tw CFPORT=8443 bash <(curl -Ls https://github.com/eooce/xray-2go/raw/main/xray_2go.sh) `
扩展变量CFIP为优选IP或优选域名，CFPORT为优选IP或优选域名对应的端口

# NAT小鸡
如果是NAT机，带端口变量运行脚本，确保PORT变量后面有1个端口可用
` PORT=10000 bash <(curl -Ls https://github.com/eooce/xray-2go/raw/main/xray_2go.sh) `

# 附件
https://github.com/eooce/xray-2go