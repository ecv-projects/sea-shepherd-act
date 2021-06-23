<template>
  <div class="specie_detail">
    <div :style="{'background-image': 'url(' + require(`@/assets/img/species/${oneSpecie.ImgName}`) + ')'}">
    </div>
    <div class="page-wrapper">
      <div class="specie_detail-head">
        <h1>{{ oneSpecie.LatinName }}</h1>
        <p>{{ oneSpecie.CommonName }}</p>
        <p class="status vulnerable">{{ oneSpecie.Status }}</p>
        <p>{{ oneSpecie.Desc }}</p>
      </div>
      <div class="specie_detail-area">
        <h2>Zone de pêche</h2>
        <div v-for="area in oneSpecie.FishingArea"
          :key="area.id"
          class="area-item">
          <div class="img">
            <img :src="require(`@/assets/img/species/${area.img}`)" />
          </div>
          <div class="content">
            <div class="top">
              <h3>{{ area.name }}</h3>
              <p class="status">{{ area.status }}</p>
            </div>
            <p>{{ area.ratio }} de la pêche</p>
          </div>
        </div>
      </div>
      <div class="specie_detail-method">
        <h2>Méthode de pêche</h2>
        <div v-for="method in oneSpecie.FishingMethod"
          :key="method.id"
          class="method-item">
          {{ method.name }}
          {{ method.status }}
        </div>
      </div>
      <div class="specie_detail-alternatives">
        <h2>Alternatives</h2>
        <div v-for="alternative in oneSpecie.Alternatives"
          :key="alternative.id"
          class="alternative-item">
          <div class="img">
            <img :src="require(`@/assets/img/species/${alternative.img}`)" />
          </div>
          <div class="content">
            <h3>{{ alternative.name }}</h3>
            <p>{{ alternative.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
  props: {
   oneSpecie: Object
  }
 }
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.specie_detail {
  &-head {
    margin-bottom: 50px;

    .status {
      color: $black;
      font-size: 14px;
      padding: 3px 12px;
      border-radius: 40px;
      display: inline-block;
      margin-bottom: 20px;
    }
  }

  &-area {
    margin-bottom: 50px;

    .area-item {
      display: flex;
      margin-bottom: 13px;
      align-items: center;

      .img {
        flex: 1;
      }
      .content {
        flex: 3.5;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .status {
            font-size: 14px;
            font-weight: 700;
            text-transform: capitalize;

            &::before {
              content: '';
              display: inline-block;
              height: 8px;
              width: 8px;
              border-radius: 50%;
              background-color: blue;
              margin-right: 5px;
            }
          }
        }

        p {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
