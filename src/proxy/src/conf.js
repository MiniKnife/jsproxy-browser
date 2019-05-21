export const CDN_PATH = 'https://cdn.jsdelivr.net/gh/etherdream/jsproxy-browser@dev/www/assets/'
export const HOME_FILE = 'index.html'
export const URL_DELIM = '-----'
export const JS_VER = '49'
//
// 不走代理的直连资源
//
// 必须满足：
// 1.返回头 access-control-allow-origin 为 *
// 2.不校验 referer，或者允许为空
// 3.不校验 origin
//
// 尽量满足：
// 1.请求 METHOD 为 GET
// 2.请求不产生 preflight
//
export const DIRECT_HOST = [
  // js cdn
  'cdn.jsdelivr.net',
  'unpkg.com',

  // ali
  'at.alicdn.com',
  'img.alicdn.com',
  'g.alicdn.com',
  'i.alicdn.com',
  'atanx.alicdn.com',
  'wwc.alicdn.com',
  'gw.alicdn.com',
  'assets.alicdn.com',
  'aeis.alicdn.com',
  'atanx.alicdn.com',
  'sc01.alicdn.com',
  'sc02.alicdn.com',
  'sc03.alicdn.com',
  'sc04.alicdn.com',

  // baidu
  // 'img*.bdimg.com',
  'img0.bdimg.com',
  'img1.bdimg.com',
  'img2.bdimg.com',
  'img3.bdimg.com',
  'img4.bdimg.com',
  'img5.bdimg.com',
  'webmap0.bdimg.com',
  'webmap1.bdimg.com',
  'iknowpc.bdimg.com',
  'gss0.baidu.com',

  // zhihu
  'static.zhihu.com',
  'pic1.zhimg.com',
  'pic2.zhimg.com',
  'pic3.zhimg.com',
  'pic4.zhimg.com',
  'pic5.zhimg.com',
  'pic7.zhimg.com',

  // jianshu
  'upload.jianshu.io',
  'upload-images.jianshu.io',
  'cdn2.jianshu.io',

  // yd
  'shared.ydstatic.com',

  // ?
  'img.zcool.cn',

  // uc
  'image.uc.cn',

  // csdn
  'csdnimg.cn',
  'g.csdnimg.cn',
  'img-ads.csdn.net',

  // sogou
  'img03.sogoucdn.com',
  'img04.sogoucdn.com',

  // wukong
  'p1.pstatp.com',

  // shimo
  'images-cdn.shimo.im',

  // img host
  's1.momo.moda',

  // 
  'user-gold-cdn.xitu.io',
  'ob7zbqpa6.qnssl.com',

  // ???
  'img-egc.xvideos-cdn.com',
  'img-hw.xvideos-cdn.com',
  'img-l3.xvideos-cdn.com',
  'static-egc.xvideos-cdn.com',
  'cdn77-pic.xvideos-cdn.com',

  // ??
  'ci.phncdn.com',
]

// 节点名 -> 域名
export function getHostByNodeId(id) {
  if (id === 'local') {
    return 'localhost:8080'
  }
  return `node-${id}.etherdream.com:8443`
}

// 节点配置
// 等于 1，直接使用该节点
// 大于 1，使用 `节点-id`
//  id = str_hash(url) % N
//  可实现多线负载均衡
export const NODE_MAP = {
  'aliyun-hk': 2,
  'aliyun-sg': 1,
  'bwh-la': 1,
  'justhost-moscow': 1,
  'justhost-novosibirsk': 1,

  'cf-aliyun-hk': 1,
  'cf-aliyun-sg': 1,
  'cf-bwh-la': 1,
  'cf-justhost-moscow': 1,
  'cf-justhost-novosibirsk': 1,

  'local': 1,
}

// 默认节点
export const NODE_DEF = 'aliyun-hk'