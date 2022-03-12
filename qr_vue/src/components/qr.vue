<template>
    <div>
        <article class="grid">
            <div>
                <h3>QR - Code</h3>         
                <input id="tx" type="text" placeholder="Ex: Olá" v-model="input_text">
                <button id="run" @click="gerar()">Gerar</button>
            </div>
            <div class="result">
                <img src="../assets/logo.png" alt="" v-if=!input_text >
                
                <canvas id="result" v-if=input_text>
                </canvas>
            </div>
        </article>
    </div>
</template>

<script>
import code from '@/services/API_QR'

export default {
  data(){
      return{
          input_text:''
      }
  },
  methods:{
      gerar:function(){
          code.generate('result',this.input_text);
      }   
  }
}
</script>

<style>
img{
    width: 300px;
    height: 300px;
}
.result{
    text-align: center;
    margin: auto;
}
</style>