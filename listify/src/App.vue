<template>
  <div id='app'>
    <div class='nav'>
      <router-link to="/">Home</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/protected">Protected</router-link>
      <router-link to="/note">Note</router-link>
      <router-link to="/create">Create</router-link>
      <router-link to="/auth" v-if="!signedIn">Sign Up / Sign In</router-link>
      <amplify-sign-out v-if="signedIn"></amplify-sign-out>
<!--  <router-link tag="p" to="/example">Example</router-link> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { AmplifyEventBus } from 'aws-amplify-vue'
import { Auth } from 'aws-amplify'

export default {
  name: 'app',
  data() {
    return {
      signedIn: false
    }
  },
  beforeCreate() {
    AmplifyEventBus.$on('authState', info => {
      if (info === 'signedIn') {
        this.signedIn = true
        this.$router.push('/profile')
      }
      if (info === 'signedOut') {
        this.$router.push('/auth')
        this.signedIn = false
      }
    });

    Auth.currentAuthenticatedUser()
      .then(user => {
        this.signedIn = true
      })
      .catch(() => this.signedIn = false)
  }
}
</script>

<style lang="scss">
// @import "@/styles/global.scss";
.nav{
  display: flex;
  justify-content: center;
  a{
    @extend .button;
    padding: 20px;
    margin: 10px;
  }
}
</style>