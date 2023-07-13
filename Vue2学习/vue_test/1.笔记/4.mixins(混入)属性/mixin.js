export const mixin = {
  data() {
    return {
      x:100,
      y:1000,
      address:'北京'
    }
  },
  
}
//分别暴露
export const mixin2 = {
  methods: {
    showName(){
      alert(11)
    }
  },
}