import express from "express";
import morgan from "morgan";
import path from 'path';
import config from './config.js';

const app = express();
const { port, host } = config;

// 打印请求日志
app.use(morgan('dev'));

app.use(express.static(path.join("public", "main")));

app.post("/microapps", (req, res) => {
  // 这里可以管理后台新增菜单存储到数据库的数据
  // 模拟管理后台配置微应用菜单数据
  res.json([
    {
      // 应用名称
      name: 'micro-1',
      // 应用标识
      id: 'micro1',
      // 应用脚本
      script: `http://${host}:${port.micro}/micro1.js`,
      // 应用样式
      style: `http://${host}:${port.micro}/micro1.css`,
      // window 上的挂载钩子函数
      mount: "micro1_mount",
      // window 上的卸载钩子函数
      unmount: "micro1_unmount",
      // 是否需要预加载
      prefetch: true,
    },
    {
      name: 'micro-2',
      id: 'micro2',
      script: `http://${host}:${port.micro}/micro2.js`,
      style: `http://${host}:${port.micro}/micro2.css`,
      mount: "micro2_mount",
      unmount: "micro2_unmount",
      prefetch: true,
    }
  ])
});

// 启动node 服务
app.listen(port.main, host);
console.log(`server start at http://${host}:${port.main}/`);