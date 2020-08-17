<template>
 <div class="content">
    <div class="content-c">
          <div class="loginbox">
          <!-- 用户名 -->
          <div class="input">
          </div>
          <!-- 选择头像 -->
          <div></div>
          </div>
    </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../public/image/02a28d595dea30839eeaa0fdd15dfce2.jpg') no-repeat;
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
}
.input {
  width: 100%;
  height: 80px;
  
}
</style>
