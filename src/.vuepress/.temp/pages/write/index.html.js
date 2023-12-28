export const data = JSON.parse("{\"key\":\"v-c9b48f2e\",\"path\":\"/write/\",\"title\":\"写作\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"写作\",\"shortTitle\":\"写作\",\"description\":\"写作\",\"icon\":\"fa-solid fa-folder-open\",\"dir\":{\"order\":4},\"article\":false},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":20},\"filePathRelative\":\"write/README.md\",\"excerpt\":\"\",\"copyright\":{\"author\":\"杨祖攀\",\"license\":\" CC BY-NC-ND 4.0 \"}}")

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
