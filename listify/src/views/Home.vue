<template>
  <div class="hello">
    <h1>{{ test }}</h1>
    Todo:
    <ul>
      <li>Figure out sass loader so I can have global sass variables</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    msg: "test"
  },
  data(){
    return{
      test: "Focus on developing this website first then learn the deeper details"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
