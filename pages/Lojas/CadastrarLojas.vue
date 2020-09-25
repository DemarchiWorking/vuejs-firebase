<template>
  <div id="conteudo"> 
      
        </div>
</template>

<script>


export default {
  name: 'Listagem',
  
  data() {
  return {
    lista: []
  }},
  created: function () {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => {
      document.getElementById("conteudo").innerHTML = JSON.stringify(json)

  })
  }
}
</script>

<style scoped>
*{
  background-color: black ;
}
</style>