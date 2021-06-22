<template>
  <div class="specie-item">
    <router-link
      class="specie-link"
      :to="{ name: 'specie', params: { id: data.id } }"
    >
      #{{ index }} {{ data.name }}
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
