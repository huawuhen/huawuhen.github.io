# 准备
uboot文件
固件
见附件

# 开始

配置好原厂系统的账号密码；电脑链接路由器LAN；telnet链接 账号H3C ，密码是原厂系统后台密码，端口99；

下载 uboot

```
cd /tmp
curl -o https://git.19910321.best/uboot.bin uboot.bin # 若地址失效可自己将uboot.bin上传到支持外链的
mtd write /tmp/uboot.bin FIP

```

刷入不死BOOT结束；

# 刷OP

按着RESET通电10秒，电脑配置固定IP：192.168.1.X ,进入192.168.1.1 选择你的固件刷入。

先在UBOOT刷入factory.bin固件

然后进入OP，系统-升级刷入sq固件。

# 附件
我正通过联通云盘分享文件给您，请点击下面的链接，输入提取码获取文件
链接：https://pan.wo.cn/s/1d0e3N40251
提取码：rXCP