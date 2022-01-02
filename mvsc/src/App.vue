<template>
  <div id="app">
      <div style="font-family:verdana;padding:5px;border-radius:10px;border:8px solid #e9eef3;">
      <div class="title" style="background-color:#b3c0d1;line-height:1">
      <h1 style="text-align:center; text-decoration:underline;"><font face="Times">mvSC</font></h1>
      <p style="text-align:center;"><font face="Times"><font size="4.5">Modeling and Verification Tool for Smart Contract</font></font></p>
      </div>
      </div>
      <br>
        <el-container>
        <!-- Header -->
        <el-header>
          <!-- br: 导航 -->
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/Main" route="/Main"><b><font face="Times"><font size="4">Main</font></font></b></el-menu-item>
          <el-menu-item index="/Download" route="/Download"><b><font face="Times"><font size="4">Try it online</font></font></b></el-menu-item>
          <el-menu-item index="/Manuals" route="/Manuals"><b><font face="Times"><font size="4">Manuals</font></font></b></el-menu-item>
        </el-menu>
        </el-header>

      <!-- Body -->
        <el-main>
            <router-view>
            </router-view>
          </el-main>
    
      <!-- Footer -->  
      <el-footer>Copyright © mvSC 2021 | Designed by ISCAS</el-footer>
      </el-container>
  </div>
  
</template>

<script>
export default {
  name: "App",
  data() {
      return {
        activeIndex: '/',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.$router.push(key);
      }
    },

};
</script>


<style>
.el-header {
  text-align: center;
  line-height: 100px;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  line-height: 100px;
}

</style>
