<template>
  <div class="index">
    <div>       
        <el-col>
          <el-date-picker
            v-model="time"
            type="date"
            :push="5"
            placeholder="选择日期">
          </el-date-picker>           
          <el-select v-model="from" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-row>
            客户名称
            <el-input
            placeholder="请输入"
            v-model="guest"
            :span="10"
            clearable>
          </el-input>
          </el-row>     
        </el-col>
        <el-col :span="12">
          业务年限
          <el-input
            placeholder="请输入"
            v-model="time_mession"
            :span="10"
            clearable>
          </el-input>
        </el-col>
        <el-col :span="12">
          业务金额<el-input
            placeholder="请输入"
            v-model="money"
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
          <el-button type="primary" @click = "renden">提交</el-button>
        </el-col>      
    </div>

  </div>
</template>
<script>
/* eslint-disable */ 
  export default {
    mounted () {
      var str = JSON.parse(localStorage.getItem('key'));
      this.id = str.id;      
    },
    data() {
      return {
        id: '',
        time: '',
        from: '',
        guest: '',
        textarea: '',
        time_mession: '',
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
    },
    methods :{
      renden() {
        this.$axios.post("http://localhost:8888/login",{
             name:this.form.username,
             password:this.form.password,
            }).then(function(res){
              localStorage.setItem('key', JSON.stringify(res.data));
              status = res.data.power;     
              if(status == 3){
              status = 0;
              that.$router.replace('userhome');
            }
            if(status == 1){
              status = 0;
              that.$router.replace('home');
            }                 
            }).catch(function(error){
              throw error;
            }); 
      }
    }
  };
</script>
<style lang="scss" scoped>
.el-col{
  margin-bottom:10px;
}
</style>
