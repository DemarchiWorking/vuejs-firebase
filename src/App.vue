<template>
  <div id="app"> 
    <NavBarComp> </NavBarComp>
    <SideBarComp> </SideBarComp>
    <router-view> </router-view> 

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

  }
}
</script>

<style>

</style>
