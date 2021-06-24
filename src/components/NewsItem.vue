<template>
  <div class="news-item">
    <router-link
      class="news-link"
      :to="{ name: 'post', params: { id: data.id } }"
      >
      <div class="img">
        <img :src="require(`@/assets/img/news/${data.ImgName}`)" />
      </div>
      <div class="content">
        <div class="tags">
            <p v-for="tag in data.Tags"
            :key="tag.id"
            class="tag">#{{ tag.name }}</p>
        </div>
        <h3>{{ data.Title }}</h3>
        <div class="infos">
          <p class="info">{{ data.DatePublish }}</p>
          <span>&#8226;</span>
          <p class="info">{{ data.ReadingTime }}</p>
        </div>
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

.news-item {
  .news-link {
    display: flex;
    align-items: center;
    padding: 12px 14px;
    border-radius: 6px;
    background-color: #2D2D33;
    margin-bottom: 16px;
    margin-right: 15px;

    .img {
      margin-right: 15px;
    }

    .content {
      min-width: 180px;

      h3, p {
        color: $white;
      }

      h3 {
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 12px;
      }

      .tags {
        display: flex;
        align-items: center;

        .tag {
          margin-right: 5px;
          margin-bottom: 3px;
          color: #C4C4C4;
          font-size: 14px;
        }
      }

      .infos {
        display: flex;
        align-items: center;

        span {
          color: #C4C4C4;
          margin-right: 5px;
        }

        .info {
          color: #C4C4C4;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 0;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
