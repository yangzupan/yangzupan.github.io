import { defineUserConfig } from "vuepress";
import theme from "./theme2.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { cut } from "@node-rs/jieba";
export default defineUserConfig({
  // 部署站点的基础路径
  base: "/",
  // 静态文件生成目录
  dest: "./dist2",
  // 站点的语言
  lang: "zh-CN",
  // 站点的标题
  title: "杨祖攀",
  // 站点的描述
  description: '一个正在成长、不断进化、持续学习的 95 后创业者',
  // 主题配置
  theme,
  // 插件配置
  plugins: [
    // 搜索
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 是否自动提示搜索建议。
      autoSuggestions: true,
      // 创建索引选项
      indexOptions: {
        // 使用 nodejs-jieba 进行分词
        tokenize: (text, fieldName) =>
          fieldName === "id" ? [text] : cut(text, true),
      },
    }),
  ],
});
