<template>
  <div>
    <div>{{numberAny}}</div>
    <div>{{stringAny}}</div>
    <div>{{booleanAny}}</div>
  </div>
</template>

<script>
export default {
  props: 
  ["numberAny", 
  "stringAny", 
  "booleanAny"],
};
</script>

<style>
</style>