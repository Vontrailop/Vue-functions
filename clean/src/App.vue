<template>
  <div>
    <div>
      <component-1
        stringAny="Cualquier caracter"
        numberAny="21"
        booleanAny="true"
      />
    </div>
    <div>
      <div>
        <ol>
          <li>
            <input placeholder="El string" type="text" v-model="stringData" />
          </li>
          <li>
            <input 
            placeholder="El number" type="number" v-model="numberData" />
          </li>
          <li>
            <select placeholder="El boolean" v-model="booleanData">
              <option value="true">Verdadero</option>
              <option value="false">Falso</option>
            </select>
          </li>
        </ol>
      </div>
      <button @click="navega(1)" style="margin: 5; padding: 5">
        Navega componente 1
      </button>
      <button @click="navega(2)">Navega componente 2</button>
    </div>

    <router-view />

    <hr>

    <h2>Funciones emit</h2>

    <component-emit 
    @clic-boton="manejarClic" />
    <hr>
    <h1>Funciones computadas:</h1>
    <input v-model="valor1" type="number" placeholder="valor1" /><br/><input v-model="valor2" type="number" placeholder="valor2"/>
    <p>{{computada1}}</p>
    
    <comp-mdal />
  </div>
</template>

<script>
import { ref } from "vue";
import Component1 from "./components/componentsWithProps/Component1.vue";
import Component2 from "./components/componentsWithProps/Component2.vue";
import ComponentEmit from './components/emitFunctions/ComponentEmit.vue';
import CompMdal from "./components/modal/CompModal.vue"

export default {
  components: { Component1, Component2, ComponentEmit,CompMdal },
  data() {
    return {
      valor1:0,
      valor2:0,
      numberData: ref(),
      stringData: ref(),
      booleanData: ref(),
    };
  },
  methods: {
    navega(opc) {
      switch (opc) {
        case 1:
          this.$router.push({
            name: "component1",
            params: {
              numberAny: this.numberData,
              stringAny: this.stringData,
              booleanAny: this.booleanData,
            },
          });
          break;
        case 2:
          this.$router.push({
            name: "component2",
            params: {
              numberAny: this.numberData,
              stringAny: this.stringData,
              booleanAny: this.booleanData,
            },
          });
          break;

        default:
          break;
      }
    },
    manejarClic() {
      alert('Alerta desde App.vue')
    },
  },
  computed:{
    computada1(){
      return Math.abs(+this.valor1) + (+this.valor2)
    }
  },
  watch:{
    valor1(newV,oldV){
      console.log("Valor viejo: "+oldV);
    },
  }
};
</script>

<style>
</style>