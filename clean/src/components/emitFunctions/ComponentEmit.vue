<template>
  <div>
    <button @click="emitirEvento">Hacer clic</button>
  </div>
</template>

<script>
export default {
  methods: {
    emitirEvento() {
      alert('Alert desde HIJO')
      this.$emit('clic-boton');
    }
  }
}
</script>