<template>
  <div class="index">
    <div>
      <el-col>
          <el-date-picker
            v-model="value1"
            type="date"
            :push="5"
            placeholder="选择日期">
          </el-date-picker>
        </el-col>
        <el-col>
          <el-input
            placeholder="输入主题"
            v-model="input8"
            clearable>
          </el-input>
        </el-col> 
        <el-col>
          <el-input
            type="textarea"
            :rows="20"
            placeholder="请输入日志"
            v-model="textarea">
          </el-input>
        </el-col>   
        <el-col :span="10" :push="0">
          <el-button type="primary">提交</el-button>
        </el-col>      
    </div>

  </div>
</template>
<script>
  export default {};
</script>
<style lang="scss" scoped>
.el-col{
  margin-bottom:10px;
}
</style>
