# 启动一个额外的本地服务器
npm run build
cd ./dist
echo "请打开下面这个地址"
npx http-server & cd ../ && docsify serve demo

