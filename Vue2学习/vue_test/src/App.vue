<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <Banner></Banner>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 通过a标签来实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- 路由是通过 router-link 来进行页面的局部刷新-->
          <!-- 路由是通过 router-link 来进行页面的局部刷新-->
          <!-- 路由是通过 router-link 中的 active-class 来实现页面选中的css效果-->
          <router-link class="list-group-item" active-class="active" to="/about">
            About
          </router-link>
          <router-link class="list-group-item" active-class="active" to="/home">
            Home
          </router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 路由是通过 router-view 来实现对应组件显示-->
            <router-view>
            </router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
export default {
  name: 'App',
  components: {
    Banner
  }
}
</script>
<style></style>


