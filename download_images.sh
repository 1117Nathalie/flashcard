#!/bin/bash

# 词汇闪卡图片下载和整理脚本
# 此脚本帮助您将Midjourney生成的图片整理到正确的目录

echo "=== 词汇闪卡图片下载和整理工具 ==="
echo "此脚本将帮助您将Midjourney生成的图片整理到正确的目录"
echo ""

# 确保图片目录存在
mkdir -p public/images

# 图片文件名列表
image_files=(
  "tiaozheng.jpg"    # 调整
  "guodu.jpg"        # 过渡
  "youxiao.jpg"      # 有效
  "xianxiang.jpg"    # 现象
  "shixian.jpg"      # 实现
  "zhuanhuan.jpg"    # 转换
  "liyong.jpg"       # 利用
  "xinzhongyoushu.jpg" # 心中有数
  "zhai.jpg"         # 宅
  "shiying.jpg"      # 适应
  "zonghe.jpg"       # 综合
  "qingsu.jpg"       # 倾诉
  "kongju.jpg"       # 恐惧
  "jijiang.jpg"      # 即将
  "chenjin.jpg"      # 沉浸
  "wenjian.jpg"      # 文件
  "fanzao.jpg"       # 烦躁
)

echo "请按照以下步骤操作："
echo "1. 使用 flashcard/midjourney_prompts.txt 中的提示词在Midjourney生成图片"
echo "2. 下载生成的图片"
echo "3. 将图片重命名为以下文件名："
echo ""

for img in "${image_files[@]}"; do
  echo "   - $img"
done

echo ""
echo "4. 将所有图片放入 flashcard/public/images 目录"
echo "5. 运行应用查看效果"
echo ""

echo "您也可以使用占位图片进行测试："
echo "运行以下命令下载占位图片（需要安装curl）："
echo ""
echo "cd flashcard"
echo "for img in \${image_files[@]}; do"
echo "  curl -o public/images/\$img https://via.placeholder.com/300x200?text=\${img%.*}"
echo "done"
echo ""

echo "是否要下载占位图片用于测试？(y/n)"
read download_placeholders

if [[ $download_placeholders == "y" || $download_placeholders == "Y" ]]; then
  echo "正在下载占位图片..."
  for img in "${image_files[@]}"; do
    echo "下载 $img..."
    curl -o public/images/$img "https://via.placeholder.com/300x200?text=${img%.*}"
  done
  echo "占位图片下载完成！"
else
  echo "跳过占位图片下载。请手动添加图片到 public/images 目录。"
fi

echo ""
echo "完成！现在您可以运行应用查看效果。" 