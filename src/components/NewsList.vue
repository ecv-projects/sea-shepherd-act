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
          ImgName: 'img-post.png',
          Title: 'Projet éolien de Saint Brieuc responsable ...',
          Tags: [
            {id: '1', name: 'pollution'},
            {id: '2', name: 'france'},
            {id: '3', name: 'éolien'}
          ],
          DatePublish: '15 juin 2021',
          ReadingTime: '15 min'
        },
                {
          id: uniqueId('post-'),
          ImgName: 'img-post.png',
          Title: 'Projet éolien de Saint Brieuc responsable ...',
          Tags: [
            {id: '1', name: 'pollution'},
            {id: '2', name: 'france'},
            {id: '3', name: 'éolien'}
          ],
          DatePublish: '15 juin 2021',
          ReadingTime: '15 min'
        },
        {
          id: uniqueId('post-'),
          ImgName: 'img-post.png',
          Title: 'Projet éolien de Saint Brieuc responsable ...',
          Tags: [
            {id: '1', name: 'pollution'},
            {id: '2', name: 'france'},
            {id: '3', name: 'éolien'}
          ],
          DatePublish: '15 juin 2021',
          ReadingTime: '15 min'
        }
      ]
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/theme/variables.scss';

.news-list {
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
  margin-bottom: 25px;

}
</style>
