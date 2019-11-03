<template>
  <div class="home container__lg">
    <h1>{{ test }}</h1>
    Todo:
    <ul>
      <li>Create a budget tracker</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
  },
  data(){
    return{
      test: "Focus on developing this website first then learn the deeper details"
    }
  }
}
</script>

<style scoped>

</style>
