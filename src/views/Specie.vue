<template>
  <div>
    <specie-detail :oneSpecie="infos"></specie-detail>
  </div>
</template>

<script>
import SpecieDetail from '@/components/SpecieDetail'
import uniqueId from 'lodash.uniqueid'

export default {
  components: { SpecieDetail },
  data() {
   return {
    infos: {
      ImgName: 'specie-1.png',
      LatinName: 'Alopias Superciliosus',
      CommonName : 'Requin Renard',
      Status: 'Vulnérable',
      Desc: 'Sous le nom vernaculaire de requin-renard, se cache plusieurs espèces. Toutes appartiennent à la famille des Alopias. Parmi ses membres, deux intéressent le plongeur : le requin-renard commun ou renard de mer',
      FishingArea: [
        { id: uniqueId('area-'), name: 'Atlantique Nord', ratio: '70%', status: 'interdite', class: '3', img: 'preview_map.png' },
        { id: uniqueId('area-'), name: 'Méditerranée', ratio: '20%', status: 'interdite', class: '2', img: 'preview_map.png' }
      ],
      FishingMethod: [
        { id: uniqueId('method-'), name: 'Pêche au filet', status: 'tolérée', class: '2', img: 'peche_filet.png' },
        { id: uniqueId('method-'), name: 'Pêche à la ligne', status: 'interdite', class: '3', img: 'peche_ligne.png' }
      ],
      Alternatives: [
        { id: uniqueId('alternative-'), name: 'Fauxmon', desc: 'Alternative vegetalienne', img: 'alternative.png' },
        { id: uniqueId('alternative-'), name: 'Fauxmon', desc: 'Alternative vegetalienne', img: 'alternative.png' }
      ]
    }
   };
  }
}
</script>
