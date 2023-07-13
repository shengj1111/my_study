export default {
  install(Vue) {
    //注册全局过滤器
    Vue.filter('aa', function (value) {
      return value.slice(0, 4)
    })
    //注册全局自定义指令
    Vue.directive('fbind', {
      //当指令与元素绑定是运行
      bind(element, binding) {
        element.value = binding.value
      },
      //当元素插入到页面时运行
      inserted(element, binding) {
        element.focus()
      },
      //模板被重新解析时运行
      update(element, binding) {
        element.value = binding.value
      },
    })
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 1000,
        }
      },
    })
  },
}
