Vue.component('greeting',{
  template:`
  <p>
    {{name}}: 大家好
    <button @click='changeName'>改名</button>
  </p>
  `,
  data:function(){
    return {
      name:'Lucky',
    }
  },
  methods:{
    changeName:function(){
      this.name = 'Henry';
    }
  }
})





new Vue({
  el:'#vue-app-one',
  
});

new Vue({
  el:'#vue-app-two',
  
});

two.title = 'app two 的title也发生变化了！';