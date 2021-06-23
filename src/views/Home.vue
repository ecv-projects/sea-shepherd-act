<template>
  <div>
    <nav-bar></nav-bar>
    <div class="page-wrapper">
      <div class="specie_day">
        <h2>Espèces du jour</h2>
        <specie-list class="specie-list"></specie-list>
      </div>
      <div class="latest_news">
        <h2>Derniers articles</h2>
        <news-list class="news-list"></news-list>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import { mapState } from 'vuex'
import SpecieList from '@/components/SpecieList'
import NewsList from '@/components/NewsList'

export default {
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle']),
  components: {
    SpecieList,
    NewsList,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  .specie_day, .latest_news {
    margin-bottom: 50px;
  }
}
</style>
