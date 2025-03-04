# 配置grok-api-proxy国内流畅使用x-ai

## 前言
grok3发布后立刻将deepseek甩在后面，毫无限制、训练数据为最新等特色是国内模型无法可比的。

## 实施
1. 克隆此项目，[https://github.com/huawuhen/grok-proxy](https://github.com/huawuhen/grok-proxy)
2. 打开[https://dash.deno.com/](https://dash.deno.com/),授权github账户。然后项目页点击一键部署如图：[![pEJEdYR.jpg](https://s21.ax1x.com/2025/03/04/pEJEdYR.jpg)](https://imgse.com/i/pEJEdYR)
---
选择你的账户下的grok-proxy项目，构建选择无构建，如图：[![pEJEsOO.jpg](https://s21.ax1x.com/2025/03/04/pEJEsOO.jpg)](https://imgse.com/i/pEJEsOO)

---
入口点，选项目的.ts文件，然后就部署吧。如下图：[![pEJEc0e.jpg](https://s21.ax1x.com/2025/03/04/pEJEc0e.jpg)](https://imgse.com/i/pEJEc0e)

---

3. 部署完成后，点击自带的免费域名，正常打开反馈如下
> Welcome to the xAI API! Documentation is available at https://docs.x.ai/

## 客户端配置

api url兼容openai，无论在什么客户端使用最终完整的chat路径应是**https://api.xx.com/v1/chat/completions**
以cherry studio 为例如图：
[![pEJEvpq.jpg](https://s21.ax1x.com/2025/03/04/pEJEvpq.jpg)](https://imgse.com/i/pEJEvpq)

---
