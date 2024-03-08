// 服务全局配置
import ip from 'ip';

export default {
  port: {
    main: 4000,
    micro: 3000,
  },

  // 获取本机ip
  host: ip.address(),
}