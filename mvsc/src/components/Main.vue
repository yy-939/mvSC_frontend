<template>
  <div class = "main">
    <div style="background-color:	#FFFFFF;line-height:4"><font face="Times"><font size="4">
    The main goal of <span><b>mvSC</b></span> is to provide a universal and effective way to model and verify smart contracts. It can help smart contract developers erase the difficulty of using model checking tools when verify smart contracts.
    </font>
    </font>
    </div>
    <hr>
    <div style="text-align: center;line-height:2">
        <el-image :src="require('@/assets/framework.png')" fit="fill">
        </el-image>
        <br>
        <font face="Times">
        Figure 1: mvSC Framework
        </font>
      </div>
    <hr>  
    <b>
    <i class="el-icon-message"></i><font size="3"><font face="Times">&nbsp;Email: 	zxy (at) ios.ac.cn</font></font>
    </b>
  </div>
</template>

<script>
export default {
  name: "Main.vue",
  data() {
      return {
        activeIndex: '/Main',
      };
    }
};
</script>

<style scoped>
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
  text-align: center;
  line-height: 300px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>