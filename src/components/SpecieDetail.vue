<template>
  <div class="specie_detail">
    <div class="specie_detail-bg" :style="{'background-image': 'url(' + require(`@/assets/img/species/${oneSpecie.ImgName}`) + ')'}">
      <div class="back" @click="$router.go(-1)">
        <img src="@/assets/img/species/angle-left.svg" />
      </div>
    </div>
    <div class="page-wrapper">
      <div class="specie_detail-head">
        <h1>{{ oneSpecie.LatinName }}</h1>
        <p>{{ oneSpecie.CommonName }}</p>
        <p class="specie-status"
          :class="'status-' + oneSpecie.StatusClass">{{ oneSpecie.Status }}</p>
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
              <p class="status"
                :class="'status-' + area.class">{{ area.status }}
              </p>
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
          <div class="bg"
          :style="{'background-image': 'url(' + require(`@/assets/img/species/${method.img}`) + ')'}">
            <h4>{{ method.name }}</h4>
            <p class="status"
              :class="'status-' + method.class">{{ method.status }}
            </p>
          </div>
        </div>
      </div>
      <div class="specie_detail-alternatives">
        <h2>Alternatives</h2>
        <div class="alternative-list">
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
        <p class="nb">Cette sélection est impartiale : aucune marque ne nous rémunère pour apparaitre ici.</p>
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
  &-bg {
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 200px;
    position: relative;

    .back {
      position: absolute;
      left: 26px;
      top: 26px;
    }
  }

  &-head {
    margin-bottom: 50px;

    h1 {
      margin-bottom: 12px;
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

            &.status-2 {
              &::before{
                background-color: $status-2;
              }
            }
            &.status-3 {
              &::before{
                background-color: $status-3;
              }
            }
          }
        }

        p {
          margin-bottom: 0;
        }
      }
    }
  }

  &-method {
    margin-bottom: 50px;

    .method-item {
      .bg {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 8px;
        padding: 8px 15px;
        margin-bottom: 14px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .status {
            font-size: 16px;
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

            &.status-2 {
              &::before{
                background-color: $vulnerable-color;
              }
            }
            &.status-3 {
              &::before{
                background-color: $danger-color;
              }
            }
          }

        p {
          margin-bottom: 0;
        }
      }
    }
  }

  &-alternatives {
    .alternative-list {
      display: flex;
      flex-wrap: nowrap;
      overflow: scroll;
      margin-bottom: 25px;

      .alternative-item {
        display: flex;
        align-items: center;
        padding: 12px 28px 12px 12px;
        background-color: #1F1F23;
        border-radius: 20px;
        margin-right: 15px;

        .img {
          flex: 1;
          margin-right: 16px;
        }
        .content {
          flex: 3.5;
          min-width: 170px;
        }
      }
    }
  }
}
</style>
