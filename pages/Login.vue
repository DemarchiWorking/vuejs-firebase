<template>
  <div align="center" id="container">
    <b-card
    tag="article"
    style="max-width: 30rem;"
    class="mb-2 shadw"

  >
    <b-form @submit.prevent="doLogin()" >
      <b-form-group
        id="input-group-1"
        label-for="input-1"> 
                <b-form-input
                v-model="email"
                id="input-1"
                type="email"
                required
                placeholder="Digite seu E-mail"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2"  label-for="input-2">
        <b-form-input
          v-model="password"
          id="input-2"
          type="password"
          required
          placeholder="Digite sua senha"
        ></b-form-input>
      </b-form-group>


     
      <b-button type="submit" variant="dark" style="width: 40%">Entrar <i class="fa fa-sign-in-alt"></i></b-button>
      <b-button type="reset" variant="grey"  style="width: 30%">Limpar</b-button>
    </b-form>
   
    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
       email: '',
       password: ''
      }
    },
    methods: {
       async doLogin() {
         const { email, password } = this  // mesma coisa que fazer (const email = this.email // const password = this.password)
         const emailuser = this.email
         try{
            const res = await this.$firebase.auth().signInWithEmailAndPassword(email, password)
            alert("Bem vindo" + emailuser)
            window.uid = res.user.uid
            this.$router.push("home")

          }catch(err){
            alert(err)
          }
           
          console.log("email:"+this.email)
          console.log("Entrou")
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form = ''
        this.form = ''
       
      }
    }
  }
</script>
<style scoped>
*{

}
.shadw{
  box-shadow: 1px 1px 5px grey;
}
</style>