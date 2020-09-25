<template>
  <div>
   
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" shadow bg-variant="dark" text-variant="light" backdrop backdrop-variant="dark">
      <template v-slot:default="{ hide }">
        <div class="p-3">
          <div class="d-flex align-items-center flex-column">
              <b-avatar variant="primary" text="PS" class="mr-3" size="5rem"> </b-avatar>
              <br>
              <h4 id="sidebar-no-header-title"> Usuário  </h4>
              <div class="divider-menu"></div>
          </div>
          
          <p>
            Bem Vindo!
          </p>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">  <b-icon icon="bar-chart-fill"></b-icon> Active  </b-nav-item>
              <b-nav-item router-link to="/ListaUsuarios">Lista de Usuarios</b-nav-item>
              <b-nav-item router-link to="/CadastrarProduto">Cadastrar Produto</b-nav-item>
             
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide"> Fechar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>

    
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'SideBarComp'  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-item > .nav-link:hover{
  color:white;
}
.divider-menu{
  border: 1px solid white;
  width: 100%;
}
</style>