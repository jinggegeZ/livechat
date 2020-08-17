<template>
 <div class="content">
    <div class="content-c">
      <div class="box">
        <div class="box1"></div>
        <div class="box2"></div>





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

<style scoped lang='scss'>
.content {
  width: 100%;
  display: flex;
  justify-content: center;
}
.content-c {
  width: 95%;
}
.box {
  width: 600px;
  height: 400px;
  background: white;
  display: flex;
}
.box1 {
  flex: 4;
  height: 100%;
  background:red;
}
.box2 {
  flex: 6;
  height: 100%;
  background: yellow;
}
</style>
