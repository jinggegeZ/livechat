<template>
  <div class="content">
    <div class="content-c">
      <div class="box">
        <!-- 用户信息 -->
        <div class="box1">
          <!-- 搜索用户名字 -->
          <div class="boxsearch">
          <div class="boxsearch1"><el-input v-model="input" placeholder="寻找聊天的朋友"></el-input></div>
          </div>
          <!-- 信息盒子 -->
          <div class="msgBox">
          <div class="msgbox" v-for="(item,index) in arrlist" :key="index">
            <div class="box1-1">
              <div class="box1-1-1">
                <!-- 头像 -->
                <div class="img" v-if="item.avatar != ''">
                  <img class="img" :src="item.avatar" alt />
                </div>
                <!-- 用户信息 -->
                <div>
                  <div>{{item.username}}</div>
                  <div>个性签名</div>
                </div>
              </div>
              <!-- 时间 -->
              <div>时间</div>
            </div>
          </div>
          </div>
          
        </div>
        <!-- 聊天信息 -->
        <div class="box2">
          <div class="box2-1">
            <div class="box2-1-top">聊天室</div>
            <div class="box2-1-body">
              123
            </div>
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
                type="text"
                v-model="textarea"
                placeholder="和朋友开聊！！！！"
                :autosize="{ minRows: 2, maxRows: 4}"
                :clearable="true"
              ></el-input>
            </div>
            <div class="box2-2-3">
                <div class="box2-2-3-1"> <el-button type="primary" round size="small">发送</el-button></div>
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
      id:'',
      arrlist:[]
    };
  },
  methods: {},

  sockets:{
    // 通信的name
    //这里是监听connect事件
    // connect: function(){
    //   this.id=this.$socket.id
    // },
    // customEmit: function(val){
    //   console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    // },
    //获取当期登录的信息
    loginSuccess(data) {
      console.log(data);
      let obj = data
      console.log(obj);
    },
    //获取离开用户信息
    loginError(data) {
      console.log(data);
       let obj1 = data
      console.log(obj1);
    },
    //获取用户列表
    userList(data){
     if(data === {}){

     }
    else{
      let arrlist = []
      let arr = data
      let abb = arr.filter(item => {
        return item.username !==''
      })
      
      this.arrlist = abb
    }
    }
  },
  mounted() {
         //触发socket连接
         
  },
  watch: {

  },
  computed: {},
};
</script>

<style scoped>
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
  border: 1px solid rgb(228, 228, 228);
  
}
.msgBox {
  width: 100%;
  height: 700px;
overflow: auto;
}
.boxsearch {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(235,239,242);
}
.boxsearch1 {
  width: 80%;
  height: 40px;
}
.msgbox {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  margin: 5px;
  z-index: -1;
}
.box1-1 {
  width: 95%;
  height: 99px;
  border: 1px solid rgb(228, 228, 228);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(235,239,242);
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

}
.box2-2-1 {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.box2-2-2 {
  width: 100%;
  height: 60px;
}
.box2-2-2 input {
  outline: none;
}
.box2-2-3 {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.box2-2-3-1 {
  margin-right: 20px;
}
</style>
