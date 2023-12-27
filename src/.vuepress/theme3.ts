import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
export default hopeTheme({
  // 网站部署域名
  hostname: "https://www.pange.net",
  // 全局默认作者
  author: {
    name: "攀哥",
    url: "https://www.yangzupan.com",
  },
  // 字体图标资源链接
  iconAssets: [
    "https://cdn.yangzupan.com/libs/fontawesome/6.4.2/js/fontawesome.min.js",
    "https://cdn.yangzupan.com/libs/fontawesome/6.4.2/js/solid.min.js",
    "https://cdn.yangzupan.com/libs/fontawesome/6.4.2/js/brands.min.js",
  ],
  // 导航栏标题
  navTitle: "",
  // 打印按钮
  print: false,
  // 全屏按钮
  fullscreen: true,
  // 纯净模式
  // 开启 纯净模式 后全屏按钮不显示
  pure: false,
  // 是否在向下滚动时自动隐藏导航栏
  navbarAutoHide: "none",
  // 文章信息配置
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word", "ReadingTime"],
  // 导航栏图标
  logo: "https://cdn.yangzupan.com/images/public/logo/pan/light.svg",
  logoDark: "https://cdn.yangzupan.com/images/public/logo/pan/dark.svg",
  // 仓库链接
  repo: "yangzupan/yangzupan.github.io",
  // 文档在仓库中的目录
  docsDir: "src",
  //是否展示编辑此页链接
  editLink: true,
  // 导航栏配置
  navbar,
  // 侧边栏配置
  sidebar,

  // 是否默认显示页脚
  displayFooter: true,
  // 页脚
  footer: '<div class="statement"> Copyright © 2023 <a href="/">杨祖攀</a> All Rights Reserved.</div> <div class="record"> <div class="number"><a href="https://beian.miit.gov.cn/" target="_blank"><img src="https://cdn.yangzupan.com/images/public/icp.svg" alt="ICP备案">滇ICP备2021007697号-20 </a><a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=53038102530518" target="_blank"><img src="https://cdn.yangzupan.com/images/public/police.svg" alt="公安备案">滇公网安备 53038102530518 号</a></div> <div>Powered by <a href="https://v2.vuepress.vuejs.org/zh/" target="_blank">VuePress</a>&nbsp; | &nbsp;Theme by <a href="https://theme-hope.vuejs.press/zh" target="_blank">Hope</a></div></div>',

  // 版权信息
  copyright:false,
  
  // 加密
  // encrypt: {
  //   config: {
  //     // 这会加密整个 guide 目录，并且两个密码都是可用的
  //     "/study/": ["1234", "5678"],
  //     // 这只会加密 config/page.html
  //     "/config/page.html": "1234",
  //   },
  // },
  // 插件配置
  plugins: {
    // 版权插件
    copyright: {
      author: "杨祖攀",
      license: " CC BY-NC-ND 4.0 ",
      canonical: "https://www.yangzupan.com/",
      global: true,
    },
    // 组件
    components: {
      // 你想使用的组件
      components: [
        // 内容组件
        // SiteInfo
        "SiteInfo",
        // VPBanner
        "VPBanner",
        // 卡片组件
        "VPCard",
        // 媒体组件
        // ArtPlayer
        // pnpm add -D artplayer
        // pnpm add -D dashjs-pure hls.js mpegts.js
        "ArtPlayer",
        // VidStack
        // pnpm add -D vidstack@1
        // "VidStack",
        // B站视频
        "BiliBili",
        // PDF
        "PDF",
        // 西瓜视频
        "XiGua",
        // 工具组件
        // 返回顶部
        // "BackToTop",
        // 徽章
        "Badge",
        // 字体
        "FontIcon",
      ],
      // 根组件
      rootComponents: {
        // 公告
        // notice: [
        //   {
        //     path: "/",
        //     title: "温馨提示",
        //     content: "内容",
        //     actions: [
        //       {
        //         // 按钮内容
        //         text: "Primary Action",
        //         link: "https://theme-hope.vuejs.press/",
        //         // 按钮类型 "default" 或 "primary"
        //         type: "primary",
        //       },
        //       { text: "Default Action" },
        //     ],
        //     fullscreen: false,
        //   },
        // ],
      },
      // PDF.js 引入
      componentOptions: {
        pdf: {
          pdfjs: "https://cdn.yangzupan.com/libs/pdfjs/4.0.269/",
        },
      },
    },
    // md增强插件
    mdEnhance: {
      // 语法
      // Tex 语法
      // 使用 KaTeX 启用 TeX 支持
      // pnpm add -D katex
      // katex: true,
      // 使用 mathjax 启用 TeX 支持
      // pnpm add -D mathjax-full
      // mathjax: true,
      // 启用下角标
      sub: true,
      // 启用上角标
      sup: true,
      // 任务列表
      tasklist: true,
      // 启用图标描述
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      imgMark: true,
      // 启用图片大小
      imgSize: true,
      // 启用导入支持
      include: true,
      // 幻灯片
      // pnpm add -D reveal.js
      // revealJs: true,
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      // 组件语法
      component: true,
      // 脚注
      footnote: true,
      // 选项卡
      tabs: true,
      // 启用 GFM 警告hint
      alert: true,
      // 启用属性支持
      attrs: true,
      // 提示容器容器
      hint: true,
      // 标记
      mark: true,
      // 自定义对齐
      align: true,
      // 图表
      // pnpm add -D chart.js
      // chart: true,
      // 图表
      // pnpm add -D echarts
      // echarts: true,
      // 启用 Markmap (思维导图)
      // pnpm add -D markmap-lib markup-toolbar markmap-view
      // markmap: true,
      // mermaid (图表绘制工具)
      // pnpm add -D mermaid
      mermaid: true,
      // 流程图
      // pnpm add -D flowchart.ts
      // flowchart: true,
      // 启用 vue 交互演示
      // pnpm add -D @vue/repl
      // vuePlayground: true,
      // 代码块分组
      codetabs: true,
      // 代码演示
      demo: true,
      // gfm 需要 mathjax-full 开启
      // gfm: true,
    },
    // feed插件
    // feed: {
    //   atom: true,
    //   json: true,
    //   rss: true,
    // },
    // 代码高亮
    prismjs: {
      // one-light(默认值) , coldark-cold
      light: "one-light",
      // one-dark(默认值) , coldark-dark
      dark: "one-dark",
    },
    // 代码复制
    copyCode: {
      // 是否启用华丽样式
      fancy: true,
    },
  },
});
