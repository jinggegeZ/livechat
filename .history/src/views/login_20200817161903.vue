<template>
  <div class="content">
    <div class="content-c">
      <div class="loginbox">
        <div class="username">用户登录</div>
        <!-- 用户登录 -->
        <div class="username1">用户登录</div>
        <!-- 用户名 -->
        <div class="input">
          <div class="inputbox">
            <el-input v-model="username" placeholder="请输入用户名"></el-input>
          </div>
        </div>
        <!-- 选择头像 -->
        <div class="username1">选择头像</div>
        <!-- 选择头像 -->
        <div class="imgbox">
          <div class="imgbox1" >
            <div class="imgbox1-1" v-for="(item,index) in imgs" :key="index" >
              <img class="imgbox2" :src="item.img" alt="">
            </div>
          </div>
        </div>
        <!-- 确认登录 -->
        <div class="login">
           <el-button type="primary" round @click="gohome(item)">立即登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      username: "",
      imgs:[
        {img: require('../../public/image/01.png')},
        {img: require('../../public/image/02.png')},
        {img: require('../../public/image/03.png')},
        {img: require('../../public/image/04.png')},
        {img: require('../../public/image/05.png')},
        {img: require('../../public/image/06.png')},
        {img: require('../../public/image/07.png')},
        {img: require('../../public/image/08.png')},
        {img: require('../../public/image/09.jpg')},
        {img: require('../../public/image/10.png')},
      ]
    };
  },
  methods: {
    //去聊天页
    gohome(item){
      console.log(item);
      this.$router.push('../views/Home.vue')
    }
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../public/image/02a28d595dea30839eeaa0fdd15dfce2.jpg")
    no-repeat;
  
}
.content-c {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginbox {
  width: 500px;
  height: 400px;
  border: 1px solid rgb(228, 228, 228);
  background: rgba(255, 255, 255, 0.5);
}
.username {
  width: 100%;
  height: 89px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-bottom: 1px solid rgb(228, 228, 228);
}
.username1 {
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50px;
  font-size: 18px;
}
.input {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(228, 228, 228);
}
.inputbox {
  width: 80%;
}
.imgbox {
  width: 100%;
  display: flex;
  justify-content: center;
}
.imgbox1 {
  width: 80%;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.imgbox1-1 {
  width: 18%;
}
.login {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: center;
}
.imgbox2 {
  width: 40px;
  height: 40px;
}
</style>
