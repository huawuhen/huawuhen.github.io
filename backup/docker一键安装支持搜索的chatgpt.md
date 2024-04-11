# 说明与准备

- 此项目结合了freegpt35、搜索、nextchat

- 对VSP的IP有要较高的要求，IP解锁chatgpt

# 安装

```
docker run -d --name free-ask-internet -p 3000:3000 -p 8000:8000 --add-host=freegpt35:127.0.0.1 --add-host=backend:127.0.0.1 --add-host=searxng:127.0.0.1 wbuntu/free-ask-internet:v0.0.1
```

运行后IP:3000即可访问，如果对话返回的只有链接，说明你的IP不行。

如果想给第三方客户端使用，上端口映射,第三方客户端，ip:8000，key:FreeAskInternet，模型：gpt-3.5-turbo

上面是网友整合的一键run。新版本需要配置较高

原作者项目：[nashsu/FreeAskInternet](https://github.com/nashsu/FreeAskInternet)



  

# FQ

1. 实测可以应用到大部分兼容openai的客户端，但是无法应用到企业微信项目
