<template>
  <div class="content">
    <div class="content-c">
      <div class="box">
        <!-- 用户信息 -->
        <div class="box1">
          <div class="box1-1">
            <div class="box1-1-1">
              <!-- 头像 -->
              <div class="img">
                <img src="../../public/image/active-my.png" alt />
              </div>
              <!-- 用户信息 -->
              <div>
                <div>用户名称</div>
                <div>个性签名</div>
              </div>
            </div>
            <!-- 时间 -->
            <div>时间</div>
          </div>
        </div>
        <!-- 聊天信息 -->
        <div class="box2">
          <div class="box2-1">
            <div class="box2-1-top">聊天室</div>
            <div class="box2-1-body"></div>
          </div>
          <div class="box2-2">
            <div class="box2-2-1">
              <div>
                <img class="img1" src="../../public/image/small.png" alt />
              </div>
              <div>
                <img class="img1" src="../../public/image/GIF.png" alt />
              </div>
              <div>
                <img class="img1" src="../../public/image/chose.png" alt />
              </div>
              <div>
                <img class="img1" src="../../public/image/word.png" alt />
              </div>
              <div>
                <img class="img1" src="../../public/image/move.png" alt />
              </div>
              <div>
                <img class="img1" src="../../public/image/more.png" alt />
              </div>
            </div>
            <div class="box2-2-2">
              <el-input
                type="textarea"
                v-model="textarea"
                placeholder="和朋友开聊！！！！"
                :autosize="{ minRows: 2, maxRows: 4}"
              ></el-input>
            </div>
          </div>
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
      input: "",
      textarea: "",
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
}
.content-c {
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 1000px;
  height: 800px;
  background: white;
  display: flex;
  margin-top: 20px;
}
.box1 {
  flex: 4;
  height: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid rgb(228, 228, 228);
}
.box1-1 {
  width: 95%;
  height: 99px;
  border-bottom: 1px solid rgb(228, 228, 228);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.box1-1-1 {
  display: flex;
  align-items: center;
  height: 100%;
}
.img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.img1 {
  width: 20px;
  height: 20px;
  margin: 5px;
}
.box2 {
  flex: 6;
  height: 100%;
  position: relative;
  border: 1px solid rgb(228, 228, 228);
}
.box2-2 {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 149px;
  z-index: 1;
  border-top: 1px solid rgb(228, 228, 228);
}
.box2-1-top {
  width: 100%;
  height: 49px;
  border-bottom: 1px solid rgb(228, 228, 228);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(235, 239, 242);
}
.box2-1-body {
  width: 100%;
  height: 600px;
  background: chartreuse;
}
.box2-2-1 {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.box2-2-2 {
  width: 100%;
  height: 100px;
}
</style>
