# docker 部署皓石传奇

## 项目
https://gitee.com/raphaelcheung/zircon-legend-server

# 服务端部署

## 创建网络
```
# 创建自定义网络名称为chuanqi并指定子网
docker network create --subnet=172.99.0.0/16 chuanqi
```
```
version: "3.8"  
services:
  zircon:  # 服务名
    container_name: zircon  # 容器名
    image: raphzhang/zirconlegend:latest  # 镜像
    networks:  # 网络配置
      chuanqi:  # 网络名称
        ipv4_address: "172.99.0.9"  # 指定固定 IP
    ports:  # 端口映射
      - "17000:7000"  # 端口
    restart: unless-stopped  # 重启策略
    user: "0:0"  # root用户
    volumes:  # 路径映射
      - ./datas:/zircon/datas  # 数据持久化
      - /etc/localtime:/etc/localtime:ro  # 时间同步
      - /etc/timezone:/etc/timezone:ro  # 时区同步
networks:  # 网络定义
  chuanqi:  # 网络名称
    external: true  # 声明为外部网络
```
- datas:服务端数据需提前上传好；

运行正常日志：
> 皓石传奇三 v1.13.0.36433
免费开源的传奇三，开源技术交流进QQ群 915941142
客户端更新路径：
地图文件路径：./datas/Map/
最大连接数量限制：200
>[2025-11-21 22:00:17]: 网络已启动.
>[2025-11-21 22:00:17]: Web 服务已启动.
>[2025-11-21 22:00:17]: 幽灵船通向地图：神舰入口
>[2025-11-21 22:00:17]: 地狱之门通向地图：赤龙城入口
>[2025-11-21 22:00:17]: 加载耗时: 18 秒
>[2025-11-21 22:00:17]: 共清理 0 条数据
>[2025-11-21 22:00:26]: 自动清理用户垃圾数据：共清理 0 条

# 客户端
下载客户端
解压修改Legend.ini的你的服务器ip和端口
```
[Network]
IPAddress=x.x.x.x
Port=17000
```
运行**Legend.exe**，注意运行前安装客户端依赖

# 下载

## 服务端运行数据
通过网盘分享的文件：服务器运行文件-20250207.rar
链接: https://pan.baidu.com/s/1YrnZ4RDSyqRoWNVMPR6OVw 提取码: y5u8

## 客户端
通过网盘分享的文件：传奇客户端.rar
链接: https://pan.baidu.com/s/1mQahhiwGNNP1o9YE9c_Whg 提取码: wixg

## 客户端运行依赖
通过网盘分享的文件：客户端运行依赖.zip
链接: https://pan.baidu.com/s/1YNgpmjBZunpAfhyoYN5YKg 提取码: dzj4

## 游戏攻略
通过网盘分享的文件：游戏攻略.rar
链接: https://pan.baidu.com/s/1-3Hr7NEZGfO_fscdRL8tUQ 提取码: 6dqy

