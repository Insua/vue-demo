<template>
  <div id="app">
      <div>
          <my-button @click.native="buttonClick"></my-button>
      </div>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
    import myButton from './components/Modifiers.vue'
export default {
  name: 'app',
    components: {
      myButton
    },
    methods: {
      buttonClick(){
          alert('点击原生');
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
