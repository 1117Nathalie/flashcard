#!/bin/bash

# 检查Node.js是否安装
if ! command -v node &> /dev/null; then
    echo "错误: 未找到Node.js。请先安装Node.js。"
    echo "您可以从 https://nodejs.org/ 下载并安装Node.js。"
    exit 1
fi

echo "启动词汇闪卡应用..."
echo "服务器启动后，请在浏览器中访问: http://localhost:3000/"
echo "您也可以访问词汇索引页面: http://localhost:3000/gallery.html"
echo "按 Ctrl+C 可以停止服务器。"

# 启动服务器
node server.js 