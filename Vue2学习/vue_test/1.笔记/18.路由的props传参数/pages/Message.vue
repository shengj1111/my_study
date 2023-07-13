<template>
  <div>
    <!-- 注意：想要使用params传参数就要在路由文件中给配置项写name还有相对应的占位参数 -->
    <ul>
      <li v-for="m in message" :key="m.id">
        <!-- 第一种形式 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">
          {{ m.title }}
        </router-link>&nbsp;&nbsp; -->

        <!-- 要是想要用params 这个配置项，就只能以对象的形式来写 （对象形式）-->
        <router-link :to="{
            name: 'detail',
            query:
            {
              id: m.id,
              title: m.title
            }
          }">
          {{ m.title }}
        </router-link>&nbsp;&nbsp;
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'message',
  data() {
    return {
      message: [
        {
          id: '001',
          title: '消息001'
        },
        {
          id: '002',
          title: '消息002'
        },
        {
          id: '003',
          title: '消息003'
        },
      ]
    }
  },
  mounted() {
    console.log(this);
  },
}
</script>

<style></style>