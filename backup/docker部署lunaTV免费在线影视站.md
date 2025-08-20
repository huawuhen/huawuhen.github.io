# docker部署lunaTV免费在线影视站
# 前言
此项目原moontv因太火被举报删库。作者闭源后只提供docker部署。项目页：https://github.com/MoonTechLab/LunaTV

---
# 部署
## 注册upstash免费Redis
[upstash是一个免费的数据库平台](upstash.com)
注册&登录-创建一个redis数据
1.复制数据库https地址，如下下图
![newscreen17853031.jpg](https://wp-cdn.4ce.cn/v2/7NIlBVa.jpeg)
填入UPSTASH_URL变量
2.点击复制数据库的写入token，如下图
![newscreen17930281.jpg](https://wp-cdn.4ce.cn/v2/QMRFllp.jpeg)
填入UPSTASH_TOKEN变量


## docker-compose

```
services:
  moontv-core:
    image: ghcr.io/moontechlab/lunatv:latest
    container_name: moontv-core
    restart: unless-stopped
    ports:
      - '8080:3000'
    environment:
      - USERNAME=admin
      - PASSWORD=admin_password
      - NEXT_PUBLIC_STORAGE_TYPE=upstash
      - UPSTASH_URL=https://heroic-xxx.upstash.io
      - UPSTASH_TOKEN=AdxxxEyYnAxNTU4Njk
```
PASSWORD：自定义密码

# 配置
程序只是空壳需要自行配置数据网站
部署后打开ip:端口-登录-控制面板-配置文件-配置订阅
`https://gist.githubusercontent.com/senshinya/5a5cb900dfa888fd61d767530f00fc48/raw/gistfile1.txt`
拉取订阅-保存即可

# 自动更新
写一个sh脚本
```
# 拉取最新镜像，并将输出存储在变量中
output=$(docker pull ghcr.io/moontechlab/lunatv:latest 2>&1)

# 检查拉取命令是否成功执行
if [ $? -ne 0 ]; then
exit 1
fi

# 检查输出中是否包含特定字符串
echo "$output" | grep -q "Image is up to date for ghcr.io/moontechlab/lunatv:latest"

# 如果镜像已经是最新的，则不执行任何操作
if [ $? -eq 0 ]; then
exit 0
fi

echo "检测到 moontv-core 更新"

# 移除旧的容器
echo "已移除: $(docker rm -f moontv-core)"

# 你需要首先导航到 `docker-compose.yml` 所在的目录
cd /root/docker-file/moontv

# 运行新的容器
echo "已启动: $(docker-compose up)"

# 打印更新时间和版本
echo "更新时间: $(date)"
echo "版本: $(docker inspect ghcr.io/moontechlab/lunatv:latest | grep 'org.opencontainers.image.version' | awk -F'"' '{print $4}')"

# 清理未使用的镜像
docker images | grep 'ghcr.io/moontechlab/lunatv' | grep -v 'latest' | awk '{print $3}' | xargs -r docker rmi > /dev/null 2>&1
echo "已移除旧的镜像."
```
将脚本写入crontab计划
`0 11 * * 5 bash /root/auto.sh`
> 每周五11点执行
