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
          :action-icon="visibility ? 'visibility_off' : 'visibility'"
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
        { validate: val => !!val, message: '必须填写学号' },
        { validate: val => val.length == 11, message: '学号长度为11位数字' }
      ],
      passwordRules: [
        { validate: val => !!val, message: '必须填写密码' },
        {
          validate: val => val.length >= 6,
          message: '密码长度不能小于6位'
        }
      ],
      validateForm: {
        username: '',
        password: ''
      },
      visibility: false
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate().then(result => {
        console.log('form valid: ', result);
        if (result) {
          this.$store.dispatch('setCurrentUser', this.validateForm);
          this.$router.push('/gpa');
        }
      });
      this.$router.push('/gpa');
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: '',
        password: ''
      };
    }
  },
  computed: {
    toggleVisibility() {
      return (this.visibility = !this.visibility);
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

