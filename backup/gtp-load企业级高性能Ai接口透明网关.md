
## 项目介绍
![](https://www.gpt-load.com/_next/image?url=%2Flogo.png&w=96&q=75)
- 透明代理: 完全保留原生 API 格式，支持 OpenAI、Google Gemini 和 Anthropic Claude 等多种格式
- 智能密钥管理: 高性能密钥池，支持分组管理、自动轮换和故障恢复
- 负载均衡: 支持多上游端点的加权负载均衡，提升服务可用性
- 智能故障处理: 自动密钥黑名单管理和恢复机制，确保服务连续性
- 动态配置: 系统设置和分组配置支持热重载，无需重启即可生效
- 企业级架构: 分布式主从部署，支持水平扩展和高可用
- 全面监控: 实时统计、健康检查、详细请求日志
- 高性能设计: 零拷贝流式传输、连接池复用、原子操作
- 生产就绪: 优雅关闭、错误恢复、完善的安全机制
- 双重认证体系: 管理端与代理端认证分离，代理认证支持全局和分组级别密钥
---
## docker部署
```
docker run -d --name gpt-load \
    -p 3001:3001 \
    -e AUTH_KEY=sk-123456 \
    -v "$(pwd)/data":/app/data \
    ghcr.io/tbphp/gpt-load:latest
```
> $(pwd)意思是当前目录下建立数据；sk-123456是后台认证也是对话key。

---
## 简单使用
1. 打开**http://ip:3001** 输入sk-123456进入后台，默认界面可以查看一些基本信息如下图
![newscreen34908000.jpg](https://wp-cdn.4ce.cn/v2/XmZiImO.jpeg)

2. 进入**密钥管理** 添加openai\gemini等服务商的密钥；先创建分组-再添加密钥
![newscreen35084796.jpg](https://wp-cdn.4ce.cn/v2/Y0wzpyz.jpeg)

![newscreen35127203.jpg](https://wp-cdn.4ce.cn/v2/wxt09ET.jpeg)

3. 复制网关地址即可在兼容gemini接口使用；openai同理如`将 https://api.openai.com 替换为http://localhost:3001/proxy/openai` openai是你创建的分组名
![newscreen35261562.jpg](https://wp-cdn.4ce.cn/v2/zMyLvZ9.jpeg)

## 结语
测试下来其实大部分功能newapi之类的都有，安装官方的温度他们更侧重企业服务可能在安全、稳定性上有优化吧。还有没有了多余的用户、支付、计费等功能速度比newapi更快、更轻量。

## 文档参考
[官方文档](https://www.gpt-load.com/docs/deployment)