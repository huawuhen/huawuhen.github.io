# 前言
- 本项目目前只支持youtubei bilibili
# 部署
1. ` docker volume create vol `
2. ` docker run -it -d --name youtube-dl-rest -p 8080:80 -v vol:/Youtube-dl-REST imgxx/youtube-dl-rest `

然后浏览器打开ip:8080即可，支持转换音频下载，不同清晰度，下载速度不经过服务器，速度很快；

![newscreen7184203.jpg](https://pic4.58cdn.com.cn/nowater/webim/big/n_v21486d9b24bd644d58627d9cbfa74bac2.jpg)

## 修改config

- 默认带的cookies如果失效，请修改为自己的；
宿主机访问这个文件
```
/var/lib/docker/volumes/vol/_data/cookies.txt
```
### 获取自己的cookies

你需要[Get cookies.txt LOCALLY](https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc) 浏览器插件。然后刷新B站-打开插件-copy，粘贴到空白文本里。我们用到的只有 
> buvid3 B79111A9-5DD3-8DC1-AAD3-BC97F62235AB35478infoc
> b_nut 1730701022
然后这两项参数修改到cookies.txt里。完工

# 反代域名打开
不用我教了，谷歌吧