<template>
  <div class="specie-item">
    <router-link
      class="specie-link"
      :to="{ name: 'specie', params: { id: data.id } }"
    >
      <div class="img">
        <img :src="require(`@/assets/img/list/${data.ImgName}`)" />
      </div>
      <div class="content">
        <h3>{{ data.CommonName }}</h3>
        <p>{{ data.LatinName }}</p>
        <p class="specie-status"
          :class="'status-' + data.class">{{ data.Status }}</p>
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

.specie-item {
  .specie-link {
    display: flex;
    align-items: center;
    padding: 12px 14px;
    border-radius: 6px;
    background-color: #2D2D33;
    margin-bottom: 16px;

    .img {
      margin-right: 15px;
    }

    .content {
      h3, p {
        color: $white;
      }

      .specie-status {
        margin-bottom: 0;
      }
    }
  }
}
</style>
