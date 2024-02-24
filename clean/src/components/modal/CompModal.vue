<template>
  <div>
    <b-modal  id="modal-1" title="BootstrapVue">
      <p class="my-4">{{prop1}}</p>
    </b-modal>
  </div>
</template>

<script>
export default {
    props:['prop1']

};
</script>

<style>
</style>