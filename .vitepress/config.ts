import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '取名小神器',
  description: '一个帮助您给宝宝取好听名字的小程序',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'keywords', content: '小程序, 取名小程序, 起名小程序, 取名神器, 起名神器, 宝宝取名, 好听的名字, 国风取名, 名字推荐, 取名工具, 生辰八字, 五行, 百家姓' }],
    ['meta', { name: 'description', content: '微信小程序, 新生儿取名, 宝宝起名, 帮你给宝宝取名, 取名大全, 免费的取名小程序, 功能强大丰富的取名工具, 金木水火土五行, 宝宝生辰八字查询' }],
  ],
  themeConfig: {
    logo: '/logo.png',
  },
  appearance: false,
})
