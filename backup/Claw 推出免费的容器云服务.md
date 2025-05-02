# Claw 推出免费的容器云服务
claw是一家云服务器商，大概是看到cf准备今年8月提供免费容器云，它提前宣布让自己成为第一家免费的容器服务商。
免费套餐计划：
- 4vCPU
- 8G ram
- 10G disk
- 10G流量
## 注册

地址： [https://console.run.claw.cloud/signin?link=EN09SD9KUFI7](https://console.run.claw.cloud/signin?link=EN09SD9KUFI7)
使用此链接注册每月赠送5usd，用来消耗免费套餐的量。

[![pEf1LDO.jpg](https://s21.ax1x.com/2025/04/15/pEf1LDO.jpg)](https://imgse.com/i/pEf1LDO)

## 创建容器

1. 快速创建
平台提供了应用商店，里面包含了常用的应用，只需填入基本的变量即可一键创建。
App Store -- lobechat -- 填入必要变量 -- 创建即可 
系统会提供一个三级域名
[![pEf1oCR.jpg](https://s21.ax1x.com/2025/04/15/pEf1oCR.jpg)](https://imgse.com/i/pEf1oCR)

---
2. 手动创建

app launchpad -- create app -- app lication name（随意写）-- Image 可选公开hub里或私有仓库镜像 --  Image Name准确填写镜像名字 -- usage配置（fixed固定 scaling弹性）以免我们免费用量耗尽选固定配置-- network-container port（这里配置容器端口根据镜像的默认规格配置哦，不是宿主自定义端口）enable internet access（打开公开访问，默认系统会赠送一个三级域名）
- Environment variables ： 变量
- local Storage ：存储
这些根据需要配置

## 自定义域名

点击 custom domain - 按提示配置CNAME解析即可