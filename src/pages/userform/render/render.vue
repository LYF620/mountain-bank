<template>
  <div class="render">
    <el-form
      ref="form"
      :model="form"
      size="small"
      :inline="false"
      label-position="top">
      <template v-for="(item, index) in formData.fields">
        <!--填空题-->
        <el-form-item :label="item.title" v-if="item.type === 'text'">
          <el-col :span="12">
            <el-input></el-input>
          </el-col>
        </el-form-item>
        <!--时间题-->
        <el-form-item :label="item.title" v-if="item.type === 'time'">
          <el-date-picker
            v-model="item.value"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <!--下拉题-->
        <el-form-item :label="item.title" v-if="item.type === 'select'">
          <el-select placeholder="请选择" v-model="form.sex">
            <el-option v-for="(option_item, option_index) in item.values" :key="option_index" :label="option_item"
                       :value="option_item"></el-option>
          </el-select>
        </el-form-item>                
      </template>
    </el-form>
    <div>           
        <el-button type="primary" round>考勤报表</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    created () {    
      this.axios.get('getFormData')
      .then(data => {
        if (data.errno === 0) {
          this.formData = data.data;
          console.log(this.formData);
        } else {
          console.log(data.msg);
        }
      })
      .catch(error => {
        console.log(error);
      })  
    },    
    data () {
      return {
        formData: {},
        form: {}
      }
    },
    methods: {
      onSubmit () {
      },
      show (value) {
        console.log(1);
        console.log(value);
      }
    },
    watch: {
      'formData': {
        handler: function (newVal, oldVal) {
          console.log(newVal);
        },
        deep: true
      }
    },
    components: {
      
    }
  };
</script>
<style lang="scss" scoped>
  .render {
    padding: 16px;
    margin-bottom: 16px;
    background-color: #ffffff;
  }
</style>
