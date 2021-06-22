<template>
  <div class="page-wrapper">
    <h1 class="species-page-title">Species page</h1>
    <specie-list class="specie-list"></specie-list>
  </div>
</template>

<script>
import SpecieList from '@/components/SpecieList'

export default {
  components: { SpecieList }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.species-page-title {
  text-align: center;
  margin-bottom: 60px;
}

.specie-list {
  margin: 20px 0;
}
</style>
