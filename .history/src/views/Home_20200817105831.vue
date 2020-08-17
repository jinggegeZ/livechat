<template>
 <div class="content">
    <div class="content-c">
      <div class="box">
        <div class="box1"></div>
            <div class="box1-1"></div>
        <div class="box2">
          <div class="box2-1"></div>
          <div class="box2-2"></div>
        </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 1000px;
  height: 800px;
  background: white;
  display: flex;
  
}
.box1 {
  flex: 4;
  height: 100%;
  background:red;
}
.box1-1 {
  width: 100%;
  height: 99px;
  border-bottom: 1px solid rgb(228,228,228); 
}
.box2 {
  flex: 6;
  height: 100%;
  background: yellow;
  position: relative;
}
.box2-2 {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: chocolate;
  z-index: 1;
}
</style>
