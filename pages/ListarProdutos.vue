<template>
  <div class="container m-4" > 
    <div class="expense-list-item row">
      <div class="col-2"> Nome Produto : test </div>
      <div class="col-8"> Valor:  </div>
      <div class="col-2"> <button> Apagar </button> </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ListarProdutos',
  data: () => ({
    expenses: []
  }),
  created: function () {
    this.getData()


var db = this.$firebase.database();
var ref = db.ref("vuejs-b2dc9/");
ref.on("value", function(snapshot) {
  console.log("Resposta: "+snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
}); 

    /*
     var taskdb = this.$firebase.database().ref("vuejs-b2dc9/")
    alert(taskdb)
    var tasksdb = []
    taskdb.on("child_added", function(data){
      var taskvalue= data.val()
      console.log(taskvalue)
      tasksdb.push(taskvalue)
      console.log(tasksdb)
    })
    this.tasks= taskdb;
    alert(this.tasksdb)
*/
    /*
     var userId = this.$firebase.auth().currentUser.uid;
      return this.$firebase.database().ref('').once('value').then(function(snapshot) {
          var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  // ..
});.*/
   console.log("TEST")
   /*
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
*/
  },
  methods: {
    getData() {
      
    }
  }
}
</script>

<style scoped>
*{
  background-color: rgb(22, 23, 21,0.1);
}
</style>