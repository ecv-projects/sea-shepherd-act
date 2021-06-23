<template>
  <div id="app">
    <div class="main-wrapper">
      <router-view />
      <div class="report">
        <img alt="logo-report" class="icon" src="@/assets/img/report.svg" />
        <p>Signaler</p>
      </div>
    </div>

    <new-content-available-toastr
      v-if="newContentAvailable"
      class="new-content-available-toastr"
      :refreshing-app="refreshingApp"
      @refresh="serviceWorkerSkipWaiting"
    ></new-content-available-toastr>
    <apple-add-to-home-screen-modal
      v-if="showAddToHomeScreenModalForApple"
      class="apple-add-to-home-screen-modal"
      @close="closeAddToHomeScreenModalForApple(false)"
    >
    </apple-add-to-home-screen-modal>
  </div>
</template>
<script>
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'
import AppleAddToHomeScreenModal from '@/components/AppleAddToHomeScreenModal'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: { NewContentAvailableToastr, AppleAddToHomeScreenModal },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp'])
  },
  methods: mapActions('app', [
    'closeAddToHomeScreenModalForApple',
    'serviceWorkerSkipWaiting'
  ])
}
</script>

<style lang="scss">
@import '@/theme/variables.scss';

body {
  margin: 0;

  a {
    font-weight: 500;
    text-decoration: none;
  }

  #app {
    // font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    //   Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-family: $barlow;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    color: $white;
    background-color: $black;

    .new-content-available-toastr {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }

    .apple-add-to-home-screen-modal {
      position: absolute;
      bottom: 0;
      right: 0;
      top: 0;
      left: 0;
      height: fit-content;
      width: fit-content;
      margin: auto;
      z-index: 1000;
    }

    .main-wrapper {
      .page-wrapper {
        margin: auto;
        padding: 26px;
        min-height: 100vh;
      }

      .report {
        cursor: pointer;
        height: 70px;
        width: 70px;
        border-radius: 50%;
        background-color: $primary-green;
        position: fixed;
        bottom: 45px;
        right: 45px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .icon {
          max-height: 35px;
        }

        p {
          margin-bottom: 0;
          color: $black;
          font-size: 11px;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
