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
        <div class="username1">用户登录</div>
        <!-- 选择头像 -->
        <div class="imgbox"></div>
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
    };
  },
  methods: {},
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
  font-size: 20px;
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
  height: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(228, 228, 228);
}
.username1 {
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgb(228, 228, 228);
  margin-left: 10px;
}
.input {
  width: 100%;
  height: 79px;
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
}
</style>
