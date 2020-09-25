<template>
  <div> 
      
     <b-container class="bv-example-row p-12">
  <b-row class="text-center">
    <b-col cols="8">
       <h2>Cadastrar Produtos</h2>
    </b-col>
     </b-row>
    </b-container>
    <form action="#">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" v-model="name">
        </div>
        <div>
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" v-model="email">
        </div>
        <div><button type="submit" v-bind:disabled="!isValid">Submit</button></div>
    </form>
 

  </div>
</template>

<script>


export default {
  name: 'CadastrarProduto',
  data: () => ({
      form: {
          produtoNome: '',
          produtoValor: ''
      }
  }),
  methods:{
      submit () {
          alert("tes")
      }
  }
}
</script>

<style scoped>
*{
}
</style>