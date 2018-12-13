<template>
  <mu-container>
    <mu-form ref="form" :model="validateForm" class="mu-demo-form">
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
  name: 'SearchBox',
  data() {
    return {
      usernameRules: [
        { validate: val => !!val, message: '必须填写用户名' },
        { validate: val => val.length >= 3, message: '用户名长度大于3' }
      ],
      passwordRules: [
        { validate: val => !!val, message: '必须填写密码' },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: '密码长度大于3小于10'
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
          console.log(this.validateForm);
          const { username, password } = this.validateForm;
          this.$router.push({
            path: '/result',
            query: {
              username,
              password
            }
          });
        }
      });
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: '',
        password: '',
        isAgree: false
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

<style>
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}
</style>
