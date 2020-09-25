<template>
  <div id="app"> 
    <div v-if="isLogged">
      <NavBarComp> </NavBarComp>
      <SideBarComp> </SideBarComp>
    <router-view> </router-view> 
    </div>
    
    <router-view v-else/> 

    <Listagem msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Listagem from './components/Listagem.vue'
import NavBarComp from './components/NavBarComp.vue'
import SideBarComp from './components/SideBarComp.vue'

export default {
  name: 'App',
  components: {
    NavBarComp,
    SideBarComp,
    Listagem

  },
  data: () => ({ isLogged: false}),
  mounted (){
    // SESSAO DE AUTH

      
    console.log(this.$firebase)
    this.$firebase.auth().onAuthStateChanged(user => {
        window.uid = user ? user.uid : null
        this.isLogged = !!user // true quando tiver logado e false quando nao tiver logado (!!)
        this.$router.push( window.uid ? "home" : "login")
        if(window.uid){
          this.$router.push("login")
        }else{
          this.$router.push("home")
        }
    })
  }
}
</script>

<style>

</style>
