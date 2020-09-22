<template>
  <div>
    {{usuarios}}
    <tr v-for="usuario of usuarios" :key="usuario.email"> {{usuario.email}}
         <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>

      
       </tr>
    
  </div>
</template>

<script>

import Produto from '../../services/produtos'

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>