# 蛋头实验室 - Blockly

Big thanks to previous projects that made this possible:
- [Otto Blockly](https://github.com/OttoDIY/blockly)
- [Blockly@rduino](https://github.com/technologiescollege/Blockly-at-rduino)
- [BlocklyDuino](https://github.com/BlocklyDuino/BlocklyDuino)
- [Blocklino] (https://github.com/fontainejp/blocklino/)

## Commands

- `yarn start`： 启动本地服务
- `yarn start:file`：加载某个bloc文件，并启动本地开发服务
- `build:pre`: 生成安装包前的脚本文件，移除arduino-cli的各类缓存、工具包，并重新安装各类arduino library
- `lib:check`: 重新安装各类arduino library
- `make`: 生成安装包（macos和windows要分别执行）
- `upload:platform:tools`: 提前将需要科学上网才能下载的esp32的工具链同步到oss（相当于做了下镜像）
- `deploy:web`: 部署网页版内容

## Todo list

- [x] 自动检查与安装库依赖
- [x] 自建esp32工具链镜像
- [x] 完成基本的功能
- [ ] macos dmg 应用可信签名
- [ ] windows 安装包（需证书？可能直接用zip包就行）
- [ ] esp32引脚映射优化
- [ ] 应用下载中心网页
- [ ] 自动版本升级