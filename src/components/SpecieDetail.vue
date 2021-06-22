<template>
  <div class="specie-detail">
    <h1>{{ oneSpecie.LatinName }}</h1>
    <p>{{ oneSpecie.CommonName }}</p>
    <p>{{ oneSpecie.Desc }}</p>
    <p v-for="area in oneSpecie.FishingArea"
      :key="area.name">
      {{ area.name }}
      {{ area.ratio }}
      {{ area.status }}
    </p>
    <p v-for="method in oneSpecie.FishingMethod"
      :key="method.name">
      {{ method.name }}
      {{ method.status }}
    </p>
  </div>
</template>

<script>
 export default {
  props: {
   oneSpecie: Object
  }
 }
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
</style>
