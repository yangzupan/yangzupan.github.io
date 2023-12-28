export const data = JSON.parse("{\"key\":\"v-1538da00\",\"path\":\"/read/\",\"title\":\"阅读\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"阅读\",\"shortTitle\":\"阅读\",\"description\":\"阅读\",\"icon\":\"fa-solid fa-folder-open\",\"dir\":{\"order\":1},\"article\":false},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":20},\"filePathRelative\":\"read/README.md\",\"excerpt\":\"\",\"copyright\":{\"author\":\"杨祖攀\",\"license\":\" CC BY-NC-ND 4.0 \"}}")

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
