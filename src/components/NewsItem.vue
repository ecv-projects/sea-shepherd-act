<template>
  <div class="news-item">
    <router-link
      class="news-link"
      :to="{ name: 'news', params: { id: data.id } }"
    >
      <div class="img">
        <img :src="require(`@/assets/img/list/${data.Title}`)" />
      </div>
      <div class="content">
        <h3>{{ data.Content }}</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    index: Number
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
</style>
