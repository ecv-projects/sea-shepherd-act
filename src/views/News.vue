<template>
  <div class="page-wrapper">
    <h1 class="news-page-title">News page</h1>
    <news-list class="news-list"></news-list>
  </div>
</template>

<script>
import NewsList from '@/components/NewsList'

export default {
  components: { NewsList }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.news-page-title {
  text-align: center;
  margin-bottom: 60px;
}

.news-list {
  margin: 20px 0;
}
</style>
