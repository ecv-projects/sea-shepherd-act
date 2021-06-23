<template>
  <div>
    <news-item
      v-for="(post, index) in news"
      :key="post.id"
      :index="index"
      :data="post"
      class="news-row">
    </news-item>
  </div>
</template>

<script>
import NewsItem from '@/components/NewsItem'
import uniqueId from 'lodash.uniqueid'

export default {
  components: { NewsItem },
  data() {
    return {
      news: [
        {
          id: uniqueId('post-'),
          Title: 'Projet éolien en baie de Saint-Brieuc responsable d’une pollution maritime : Sea Shepherd porte plainte',
          Content: 'ea Shepherd a récemment exprimé ses inquiétudes sur les différents projets d’éoliennes en mer prévus en France en raison de leur impact colossal sur la vie marine et les dérogations de destruction d’espèces protégées accordées par l’Etat français aux promoteurs du secteur. Pour cette raison nous nous étions joints à la manifestation contre le projet à Saint-Brieuc organisée par le Comité des Pêches des Côtes d’Armor fin mai.</p>\n\n\n\n<p>L’Aeolus, navire de forage actuellement en baie de Saint-Brieuc a déclaré une fuite d’huile de 100 litres ce lundi, représentant une nappe de 15,9 km de long et de 2,8 km de large, indique un communiqué de la préfecture maritime. Un «&nbsp;problème technique&nbsp;» survenu à l’occasion d’une série de forages selon Ailes Marines (filiale du groupe énergétique espagnol Iberdrola, développeur du projet éolien en mer). La société a annoncé que le navire quittera la baie de Saint-Brieuc pour rejoindre un port hollandais afin de conduire des vérifications sur les équipements de forage.',
          Tags: [
            { id: '1', name: 'pollution' },
            { id: '2', name: 'france' },
            { id: '3', name: 'éolien' },
          ],
          DatePublish: '15 juin 2021',
          Time: '15 min'
        },
      ]
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/theme/variables.scss';

</style>
