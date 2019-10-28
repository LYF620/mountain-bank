<template>
<div class="index">
  <el-row>
        <el-col :span="20">
          <el-input
            placeholder="输入姓名查找员工"
            v-model="name"
            clearable>
          </el-input>
        </el-col>        
        <el-col :span="4" :push="0">
          <el-button type="primary" @click="selecthandle('name')" >搜索</el-button>
        </el-col>
      </el-row>
                  
</div>
</template>
<script>
  export default {
    data() {
      return {
        name: ''
      }
    },
    method: {
      selecthandle() {
        console.log(1);
      }
    }
  };
</script>
<style lang="scss" scoped>

</style>
