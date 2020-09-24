<template>
  <div> 
    <tr v-for="usuario of usuarios" :key="usuario.email" v-bind:id="usuario.email"> 
    <div class="card" style="width: 18rem;">
  <img src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{usuario.name}}</h5>
    <p class="card-text"> {{usuario.email}} </p>
    <p class="card-text"> {{usuario.date}} </p>
    <a href="#" class="btn btn-primary" v-on:click="say(usuario.email)" > Editar </a>
    <a href="#" class="btn btn-primary" v-on:click="deletar(usuario.email)" > Deletar </a>
  </div>
</div>

    </tr>
    </div>
</template>

<script>
import Produto from '../services/produtos'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Listagem',
  props: {
    msg: String
  },
  data() {
  return {
    usuarios: []
  }},
  mounted(){
   // Produto.listar().then(resposta => {
    //  console.log(resposta.data[1])
    ///})  
  },
  created(){
    let promisse = Produto.listar()
    promisse.then(resposta => { 
      this.usuarios = resposta.data
    }) 
  },
  methods: {
     deletar: function (email) {
      alert(email)
      for(let i=0; i < this.usuarios.length; i++){
     //   if(this.usuarios.email == email){
            
       //  }
      }
      this.usuarios.splice(1, 30);
      console.log(this.usuarios)



    },
    say: function (message) {
      alert(message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    border: 1px 1px 1px 1px black;
  }
</style>