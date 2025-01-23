# 简介
1. Homebrew是macOS、Linux下著名的第三方包管理程序，类似ubuntu的apt-get。
# 安装
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
# 卸载
```
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"

```
# 基本使用
## 检测版本
` brew -v `

## 更新brew
` brew update `

## 查看已安装列表
` brew list `

## 搜索包管理的软件
` brew search git `

## 安装软件
` brew install git `

## 更新软件
` brew upgrade git `

## 卸载软件
` brew uninstall git `

## 查看已安装的软件是否可更新
` brew outdated `

## 查看可清理的旧软件包，仅查看
` brew cleanup -n `

## 清理所有的旧包
` brew cleanup `

## 清理指定软件的旧包
` brew cleanup git `

# 更好国内镜像
home brew软件源默认是GitHub，可改为国内清华源
```
# brew
git -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
# homebrew-core
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
# homebrew-cask
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git

brew update
```

```
# zsh
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/bottles' >> ~/.zprofile
source ~/.zshrc
# bash
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/bottles' >> ~/.bash_profile
source ~/.bash_profile
```

## 恢复默认源
```
# brew
git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew.git
# homebrew-core
git -C "$(brew --repo homebrew/core)" remote set-url origin https://github.com/Homebrew/homebrew-core.git
# homebrew-cask
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://github.com/Homebrew/homebrew-cask.git

brew update
```

其中` homebrew-bottles ` 配置只能手动删除，将` ~/.zshrc ` 文件中的 ` HOMEBREW_BOTTLE_DOMAIN=https://mirrors.xxx.com ` 内容删除，并执行 ` source ~/.zprofile ` 即可