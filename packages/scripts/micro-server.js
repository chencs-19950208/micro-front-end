import express from 'express';
import morgan from 'morgan';
import path from 'path';
import config from './config.js';

const app = express();
const { port, host } = config;

// 打印请求日志
app.use(morgan('dev'));

// 加载静态资源
app.use(express.static(path.join('public', 'micro')));

// 启动node 服务
app.listen(port.micro, host);
console.log(`server start at http://${host}:${port.micro}/`);