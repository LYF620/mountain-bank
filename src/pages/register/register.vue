<template>
  <div class="login">
    <div class="middle-wrapper">
      <div class="title-wrapper">
        <div class="title">Mountain-Bank 后台管理系统</div>
      </div>
      <div class="login-form">
        <el-form ref="registerform" :model="form" :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入账号">
              <i slot="prefix" class="el-input__icon el-icon-adm-user" style="font-size: 18px;"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :type="passwordType" v-model="form.password" placeholder="请输入密码">
              <i slot="prefix" class="el-input__icon el-icon-adm-password" style="font-size: 18px;"></i>
              <i
                slot="suffix"
                class="el-input__icon el-icon-view"
                style="cursor: pointer;"
                @click="_togglePasswordType"
              ></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="Did"></el-form-item>
          <el-form-item prop="gender">
            <div>
              <i slot="prefix" class="el-input__icon el-icon-female" style="font-size: 18px;"></i>
              <el-radio-group v-model="form.gender">
                <el-radio-button label="男"></el-radio-button>
                <el-radio-button label="女"></el-radio-button>
              </el-radio-group>
            </div>
          </el-form-item>
          <el-form-item prop="Did">
            <div>
              <i slot="prefix" class="el-input__icon el-icon-female" style="font-size: 18px;"></i>
              <el-radio-group v-model="form.Did">
                <el-radio-button label="贷款部门"></el-radio-button>
                <el-radio-button label="存款部门"></el-radio-button>
                <el-radio-button label="理财部门"></el-radio-button>
              </el-radio-group>
            </div>
          </el-form-item>
          <el-form-item prop="yanzhengma">
            <div class="check-code-wrapper">
              <div class="yanzhengma-wrapper">
                <el-input
                  v-model="form.yanzhengma"
                  @keyup.enter.native="register('registerform')"
                  placeholder="请输入验证码"
                >
                  <i
                    slot="prefix"
                    class="el-input__icon el-icon-adm-vertification"
                    style="font-size: 18px;"
                  ></i>
                </el-input>
              </div>
              <div class="validate-code-wrapper">
                <validate-code ref="validate-code" @change="_setCheckCode"></validate-code>
              </div>
            </div>
          </el-form-item>
          <el-form-item style="margin-bottom: 0;">
            <el-row>
              <el-col :span="12" :offset="0">
                <el-form-item>
                  <el-button
                    type="primary"
                    class="login-btn"
                    style="width: 100%;"
                    @click="registerHandle('registerform')"
                  >注册</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import validateCode from 'src/components/ValidateCode/index';
// import api from '../../api/api';
// import {Register} from '../../api/api'
export default {
  mounted() {
    /* eslint-disable */
    
  },
  data() {
    /* eslint-disable */
    var checkYanzhengma = (rule, value, callback) => {
      console.log(1);
      value = value.toUpperCase();
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (value !== this.checkCode) {
        callback(new Error("验证码错误"));
        this.$refs["validate-code"].draw();
        /*
         *  在这边调用组件yanzhengma的方法
         *  这里使用的element-ui的表单验证，较为玄学，有空多看
         */
      } else {
        callback();
      }
    };
    return {
      passwordType: "password",
      checkCode: "",
      form: {
        username: "",
        password: "",
        yanzhengma: "",
        gender: "男",
        Did: "贷款部门"
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        yanzhengma: [{ validator: checkYanzhengma, trigger: "blur" }]
      },
    };
  },
  methods: {
    sqlregister() {
      console.log(this.form);
      console.log(1);
    },
    _setCheckCode(value) {
      this.checkCode = value;
    },
    registerHandle(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/login");
        }
      });
      console.log(typeof(this.form.username),this.form.Did);
      this.$axios.post("http://localhost:8888/Register",{
             name:this.form.username,
             password:this.form.password,
             sex:this.form.gender,
             department:this.form.Did
        }).then(function(res){
            console.log(res);
        }).catch(function(error){
            throw error;
        });          
    },
    _togglePasswordType() {
      if (this.passwordType === "password") {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    }
  },
  components: {
    validateCode
  }
};
</script>
<style lang="scss" scoped>
.login {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(32, 160, 255);

  .middle-wrapper {
    position: fixed;
    width: 100%;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-60%);

    .title-wrapper {
      margin-top: 50px;
      margin-bottom: 30px;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      color: #ffffff;
    }
    .login-form {
      position: relative;
      margin: 0 auto;
      width: 520px;
      padding: 30px 50px;
      box-sizing: border-box;
      border-radius: 5px;
      background-color: #ffffff;

      .el-row {
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }

        .login-btn {
          width: 100%;
        }
      }

      .check-code-wrapper {
        display: flex;
        justify-content: space-between;
        height: 40px;

        .yanzhengma-wrapper {
          flex: 0 1 auto;
        }

        .validate-code-wrapper {
          flex: 0 0 160px;
        }
      }
    }
  }
}
</style>
