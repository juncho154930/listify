<template>
  <h1>Welcome, {{user.attributes.email}}</h1>
  user: {{user.username}}
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'Profile',
  data() {
    return {
      user: {}
    }
  },
  beforeCreate() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.user = user
      })
      .catch(() => console.log('not signed in...'))
  }
}
</script>