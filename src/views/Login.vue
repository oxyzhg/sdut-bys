<template>
  <mu-container>
    <mu-form ref="form" :model="validateForm" class="login-form">
      <mu-form-item label="学号" prop="username" :rules="usernameRules">
        <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="密码" help-text="登录教务处所用密码" prop="password" :rules="passwordRules">
        <mu-text-field
          prop="password"
          v-model="validateForm.password"
          :action-icon="visibility ? 'visibility' : 'visibility_off'"
          :action-click="() => (visibility = !visibility)"
          :type="visibility ? 'text' : 'password'"
        ></mu-text-field>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="submit">提交</mu-button>
        <mu-button @click="clear">重置</mu-button>
      </mu-form-item>
    </mu-form>
  </mu-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      usernameRules: [
        { validate: val => !!val, message: '请输入学号' },
        { validate: val => Number(val), message: '请输入数字学号' },
        { validate: val => val.length == 11, message: '请确认学号是否正确' }
      ],
      passwordRules: [
        { validate: val => !!val, message: '请输入密码' },
        { validate: val => val.length >= 6, message: '密码长度不能小于6位' }
      ],
      validateForm: {
        username: '',
        password: ''
      },
      visibility: false
    };
  },
  mounted() {
    this.$store.dispatch('setCurrentUser');
  },
  methods: {
    submit() {
      this.$refs.form.validate().then(result => {
        if (result) {
          this.$store.dispatch('getUserScore', this.validateForm);
        }
      });
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: '',
        password: ''
      };
    }
  }
};
</script>

<style lang="less">
.login-form {
  margin: 64px auto;
  padding: 0 10px;
}
</style>
