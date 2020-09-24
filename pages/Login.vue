<template>
  <div> 
    <input type="text" v-model="postBody" @change="postPost()"/>
  </div>
</template>

<script>
//import axios from 'axios';
export default {
  name: 'Listagem',
  data() {
    return {
       posts: [],
      errors: []
    }
  }
}
</script>

<style scoped>
*{
  background-color: red ;
}
</style>