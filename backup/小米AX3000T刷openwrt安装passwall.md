# 前言 
- 本方法可以变砖的情况下用小米官方工具刷回官方
- 所以本方法非u-boot，故需刷的是openwrt原生

# 开始
## 解锁ssh
使用 [xmir patch 工具](https://github.com/openwrt-xiaomi/xmir-patcher) 可一键解锁。
步骤：git clong下来项目./run.bat，选择1设定路由器的ip。选择2一键解锁ssh。

## ssh刷入openwrt
1、 ssh 连入路由默认账号密码root。把XXX-ax3000t-initramfs-factory.ubi文件上传到 /tmp
2、 命令` cat /proc/cmdline ` 查看硬件情况
  **firmware=0时** ，输入以下代码
 ```
ubiformat /dev/mtd9 -y -f /tmp/openwrt-23.05.5-241014-xiaomi_mi-router-ax3000t-initramfs-factory.ubi
nvram set boot_wait=on
nvram set uart_en=1
nvram set flag_boot_rootfs=1
nvram set flag_last_success=1
nvram set flag_boot_success=1
nvram set flag_try_sys1_failed=0
nvram set flag_try_sys2_failed=0
nvram commit
reboot
```
---

**If firmware=1时** ，输入以下代码
```
ubiformat /dev/mtd8 -y -f /tmp/openwrt-23.05.5-241014-xiaomi_mi-router-ax3000t-initramfs-factory.ubi
nvram set boot_wait=on
nvram set uart_en=1
nvram set flag_boot_rootfs=0
nvram set flag_last_success=0
nvram set flag_boot_success=1
nvram set flag_try_sys1_failed=0
nvram set flag_try_sys2_failed=0
nvram commit
reboot
```
---
路由器会重启，这时你可以看到ax3000t-5g-1833和ax3000t-2g-0833两个wifi出现，连接密码为12345678
winscp上传XXX-ax3000t-sysupgrade.bin到/tmp，密码即wifi密码。然后ssh下` sysupgrade -n -v /tmp/openwrt-23.05.5-241014-xiaomi_mi-router-ax3000t-sysupgrade.bin ` 命令刷入会自动重启，默认地址是192.168.1.1，root，密码为空。
## 基本设置
1. 默认英语，配置下路由器联网最后接上级路由以dhcp模式上网，系统-软件包-更新下列表-筛选器中搜-luci-i18n-base-zh-cn-下面会显示搜到的包-安装即可-然后系统-语言设置-选择中文
2. 系统-时区-修改为上海
---
## 安装passwall
1. 查询路由器的架构
```
cat /etc/os-release |grep ARCH
```
> 返回值 OPENWRT_ARCH="aarch64_cortex-a53"
2. 下载对应架构的包
[github地址](https://github.com/xiaorouji/openwrt-passwall/releases)
luci-23.05_luci-app-passwall_4.78-4_all.ipk、luci-23.05_luci-i18n-passwall-zh-cn_git-24.303.49106-a2215a0_all.ipk 这两个必下,23.05是openwrt的版本，一个软件，一个语言。然后根据自己的架构下载插件压缩包，我们这里下载passwall_packages_ipk_aarch64_cortex-a53.zip。
3. 安装依赖与passwall2软件
解压zip把里面所有的ipk上传到路由器/tmp/test，这个目录自建，然后进入/tmp/test执行批量安装命令` opkg install *.ipk ` 也可以加上强制重新安装参数` --force-reinstall `
> 如果这个报错是没有划分区，理论不影响插件使用Collected errors:
> * verify_pkg_installable: Only have 0kb available on filesystem /overlay, pkg v2ray-geosite needs 608
> * opkg_install_cmd: Cannot install package v2ray-geosite.

最后安装luci-19.07_luci-app-passwall_4.78-4_all.ipk、luci-23.05_luci-i18n-passwall-zh-cn_git-24.303.49106-a2215a0_all.ipk
刷新下，路由器应该出现passwall2插件了。

# 工具固件
我正通过联通云盘分享文件给您，请点击下面的链接，输入提取码获取文件
[链接：](https://pan.wo.cn/s/1A0L4S20979)
提取码：facm