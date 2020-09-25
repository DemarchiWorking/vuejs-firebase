<template>
  <div> 
      <b-card-group deck>
    <b-card
      class="container"
      header-tag="header"
      footer="Acessment"
      title="Cadastrar Produtos"
    >
     

     <b-container class="bv-example-row p-12">
  
    </b-container>
    <form @submit.prevent="submit()">
        <div>
            <label for="name">Nome do Produto: </label>
            <input type="text"  v-model="form.produtoNome">
        </div>
        <div>
            <label for="email">Valor: </label>
            <input  v-model="form.produtoValor">
        </div>
        <div><button type="submit">Submit</button></div>
    </form>
 </b-card>
      </b-card-group>

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
          const ref = this.$firebase.database().ref(window.uid)
          const id = ref.push().key

          const payload = {
              id,            
              createdAt: new Date().getTime(),
              imagem: "null",  
              nome_produto: this.form.produtoNome,
              valor: this.form.produtoValor
          }
          ref.child(id).set(payload, err => {
              if(err){
                  alert("erro")
              }else{
                  alert("cadastrado")
              }
          })
      }
  }
}

</script>

<style scoped>
*{
}
</style>