<template>
  <div id="app">
      <div>
          <my-button @click.native="buttonClick"></my-button>
      </div>
      <div>
          <ul>
              <li v-for="item in list">
                  <h1>{{ item }}</h1>
              </li>
          </ul>
          <div @touchmove.prevent class="layer"></div>
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
    },
    data() {
      return {
          list: [1,2,3,4,5,6,7,8,9,10]
      }
    }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
body,html {width:100%;height:100%}
h1{margin-top:10rem;}
.layer{width:100%;height:100%;position:fixed;top:0;left:0;z-index:99;background:rgba(0,0,0,.5)}
</style>
