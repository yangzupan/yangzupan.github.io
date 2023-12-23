import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig({
  // 部署站点的基础路径
  base: "/",
  // 静态文件生成目录
  dest: "./dist1",
  // 站点的语言
  lang: "zh-CN",
  // 站点的标题
  title: "个人主页",
  // 站点的描述
  description: '一个正在成长、不断进化、持续学习的 95 后利他创业者。',
  // 主题配置
  theme,
});
