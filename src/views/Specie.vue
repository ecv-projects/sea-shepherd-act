<template>
  <div class="page-wrapper">
    <specie-detail :oneSpecie="infos"></specie-detail>
  </div>
</template>

<script>
import SpecieDetail from '@/components/SpecieDetail'

export default {
  components: { SpecieDetail },
  data() {
   return {
    infos: {
      LatinName: 'Alopias Superciliosus',
      CommonName : 'Requin Renard',
      Status: 'Vulnérable',
      Desc: 'Sous le nom vernaculaire de requin-renard, se cache plusieurs espèces. Toutes appartiennent à la famille des Alopias. Parmi ses membres, deux intéressent le plongeur : le requin-renard commun ou renard de mer',
      FishingArea: [
        { name: 'Atlantique Nord', ratio: '70%', status: 'interdite' },
        { name: 'Méditerranée', ratio: '20%', status: 'interdite' }
      ],
      FishingMethod: [
        { name: 'Pêche au filet', status: 'tolérée' },
        { name: 'Pêche à la ligne', status: 'interdite' }
      ],
      Alternatives: ''
    }
   };
  }
}
</script>
