<template>
  <div> 
    <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        class="fotowidth"
        img-src="https://blog.vipleiloes.com.br/wp-content/uploads/2019/08/original-06004e086c7680b6af5f913c02c7918f-740x450.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide class="fotowidth" img-src="https://conteudo.imguol.com.br/c/entretenimento/49/2018/06/12/concessionaria-de-carros-zero-quilometro-1528813585885_v2_900x506.jpg">
      
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide class="fotowidth" img-src="https://clubedocorel.com/wp-content/uploads/2017/03/Panfleto-Venda-de-Carros-Modelo-Pronto-Clube-do-Corel-.jpg"></b-carousel-slide>
    
    </b-carousel>

    <p class="mt-4">
      {{ slide }}<br>
       {{ sliding }}
    </p>
  </div>
  <div>
  <b-card title="AutoCar" sub-title="Car dealership " align="center">
    <b-card-text>
      
    </b-card-text>

    <b-card-text> A AutoCar possui as Melhores Opções de Veículos. Temos o Seminovo que você Procura. Diversos Modelos e Marcas de Acordo com as Suas Necessidades. Entre e Saiba Mais! Venda Sem Sair de Casa. Cartório na Sua Casa. Time de Especialistas. </b-card-text>

    <a href="#" class="card-link">Card link</a>
    <b-link href="#" class="card-link">Another link</b-link>
  </b-card>
</div>
  </div>
</template>

<script>

import image from "../src/assets/logo.png"

export default {
  name: 'Listagem',
    data: function () {
        return {
            image: image
        }
    }}
</script>

<style scoped>
*{
}
.fotowidth{ 
  width: 100%;
  height: 600px;
}
</style>