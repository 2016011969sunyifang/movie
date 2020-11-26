<template>
  <div class="login">
    <el-container>
      <el-header>登录</el-header>
      <el-main>
        <!-- 表单 -->
        <el-form :rules="rules" :model="formData" ref="formData">
          <el-form-item label="手机号" prop="mobile">
            <el-input
              placeholder="请输入手机号"
              v-model="formData.mobile"
              maxlength="11"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              placeholder="请输入密码"
              type="password"
              v-model="formData.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" @click="submitForm('formData')"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { userLogin } from "@/api/api";
export default {
  data() {
    return {
      formData: {
        mobile: "",
        password: "",
      },
      rules: {
        mobile: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur",
          },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: "手机号格式不正确！",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  // 进入的时候去掉底部导航
  created() {
    this.eventBus1.$emit("footernav", false);
  },
  // 出来的时候显示底部导航
  beforeDestroy() {
    this.eventBus1.$emit("footernav", true);
  },
  methods: {
    submitForm: function (formName) {
      //这里的async 是因为里面有异步请求
      this.$refs[formName].validate(async (valid) => {
        // valid的意思是  必须rules 那里全是true 全部效验通过 valid才会变为true
        if (valid) {
          // 获取用户名和密码进行提交（API）
          let ret = await userLogin(this.formData);
          if (ret.data.code == 1000) {
            // 登录成功（存储token、跳转）
            console.log("进入code1000里面了");
            console.log(ret.data.mobile);
            //我们往 vuex 总商店触发mutation变异器 去改变里面的mobile
            this.$store.commit("usermobile", ret.data.mobile);
            this.$message({
              message: "success 即将跳转个人中心",
              type: "success",
            });
            setTimeout(() => {
              this.$router.push({ path: "/center" });
            }, 3000);
          } else {
            // 登录失败
            console.log("我进入登陆失败了");
            this.$message({
              message: "fail",
              type: "warning",
            });
            alert(ret.data.info);
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  padding-top: 80px;
  .el-container {
    width: 80%;
    margin-left: 40px;
    .el-header {
      font-size: 23px;
    }
  }
}
</style>
