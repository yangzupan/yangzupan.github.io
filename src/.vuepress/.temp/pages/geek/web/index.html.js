export const data = JSON.parse("{\"key\":\"v-3a0d8dad\",\"path\":\"/geek/web/\",\"title\":\"Web 服务\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Web 服务\",\"shortTitle\":\"Web 服务\",\"description\":\"Web 服务\",\"icon\":\"fa-solid fa-folder-open\",\"dir\":{\"order\":4},\"article\":false},\"headers\":[],\"readingTime\":{\"minutes\":0.08,\"words\":23},\"filePathRelative\":\"geek/web/README.md\",\"excerpt\":\"\",\"copyright\":{\"author\":\"杨祖攀\",\"license\":\" CC BY-NC-ND 4.0 \"}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
