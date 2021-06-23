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
        {
          id: uniqueId('specie-'),
          ImgName: 'specie-1.png',
          LatinName: 'Alopias Superciliosus',
          CommonName : 'Requin Renard',
          Status: 'Vulnérable',
          class: '2'
        },
        {
          id: uniqueId('specie-'),
          ImgName: 'specie-2.png',
          LatinName: 'Delphinapterus leucas',
          CommonName : 'Belugua',
          Status: 'Voie d’extinction',
          class: '3'
        },
        {
          id: uniqueId('specie-'),
          ImgName: 'specie-3.png',
          LatinName: 'Thunnus thynnus',
          CommonName : 'Thon rouge',
          Status: 'Menacé',
          class: '3'
        }
      ]
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/theme/variables.scss';

</style>
