<template>
  <div>
    <h2>Componente 4 Vue-router </h2>
    <ol>
      <li>{{ numberAny }}</li>
      <li>{{ stringAny }}</li>
      <li>{{ booleanAny }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ["numberAny", "stringAny", "booleanAny"],
};
</script>

<style>
</style>