# 第一：脚本
## 测速回国
` wget -qO- git.io/besttrace | bash `

# 设置时区
` timedatectl set-timezone Asia/Shanghai `

# Docker安装
` curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh `
会自动安装 Docker Compose 组件，调用命令是：docker compose。
## 安装docker pt管理
` docker run -d --restart=always --name="portainer" -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock registry.cn-hangzhou.aliyuncs.com/huawuhen-ci/huawuhendocker:latest `

# 安装代理
` wget https://raw.githubusercontent.com/yeahwu/v2ray-wss/main/tcp-wss.sh && bash tcp-wss.sh `

# bbr加速
` bash <(curl -Lso- https://git.io/kernel.sh) `

# 汇聚一个脚本
```
#!/bin/bash

# 一键整备脚本

# 注意：命令里面的汉字部分，需要根据实际替换掉，根据自己的需要来取舍

# 1) 软件更新：建议提前单独执行，可能需要更新内核，重启机器什么的

# 2) 创建脚本：把脚本放到 VPS 上，赋予执行权限并执行。然后后面的步骤就可以完全自动化了

# 3) 安装基础工具
apt install ufw curl unzip

# 4) 添加新用户

# 添加用户和用户组
username="wuhen"
password="passwd"
useradd -m -s /bin/bash -G sudo "$username"

# 设置用户密码
echo "$username:$password" | chpasswd


# 5) 修改 SSH 登录端口

sed -i '/#Port 22/a Port 22\nPort 端口号' /etc/ssh/sshd_config

# 重启 sshd
systemctl restart sshd


# 6) shh 免密连 vps

public_key="本地公钥"

# 生成服务器用户的公钥和私钥
ssh-keygen

# 写入本地的私钥到文件
cat <<EOF > /当前用户目录/.ssh/authorized_keys
$public_key
EOF

# 重启 sshd
chmod 600 /当前用户目录/.ssh/authorized_keys
systemctl restart sshd


# 7) 限制 root 用户用用密码登录（如果有设置 shh 免密登录的话）

# 使用 sed 替换文件中的内容
file="/etc/ssh/sshd_config"
search="PermitRootLogin yes"
replace="PermitRootLogin without-password"
sed -i "s/$search/$replace/" "$file"

# 重启 sshd
chmod 700 /当前用户目录/.ssh
systemctl restart sshd


# 8) 设置防火墙

# 开端口
ufw allow ssh
ufw allow 22
ufw allow 端口号

# 启用防火墙
ufw enable


# 9) 设置时区
timedatectl set-timezone 时区


# 10) 配置 BBR 加速
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
sysctl -p
```