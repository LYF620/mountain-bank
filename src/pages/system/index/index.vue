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
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="10">
          <el-input
            placeholder="输入任务名称"
            v-model="input8"
            :span="10"
            clearable>
          </el-input>
        </el-col>
        <el-col :span="15"> 
          <el-input
          :span="10"
            type="textarea"
            :rows="20"
            placeholder="请输入任务内容"
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
  export default {
    data() {
      return {
        input8: '',
        textarea: '',
        value1: '',
        options: [{
          value: '选项1',
          label: '存款部门'
        }, {
          value: '选项2',
          label: '贷款部门'
        }, {
          value: '选项3',
          label: '理财部门'
        }],
        value: ''
      }
    }
  };
</script>
<style lang="scss" scoped>
.el-col{
  margin-bottom:10px;
}
</style>
