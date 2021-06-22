<template>
  <div>
    <specie-item
      v-for="(specie, index) in species"
      :key="specie.id"
      :index="index"
      :data="specie"
      class="specie-row">
    </specie-item>
  </div>
</template>

<script>
import SpecieItem from '@/components/SpecieItem'
import uniqueId from 'lodash.uniqueid'

export default {
  components: { SpecieItem },
  data() {
    return {
      species: [
        { id: uniqueId('specie-'), name: 'Requin' },
        { id: uniqueId('specie-'), name: 'Baleine' },
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
</style>
