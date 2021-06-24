<template>
  <div>
    <div class="modal-wrapper">
      <div class="close" @click="$emit('close')">
        <img alt="logo-close" class="icon" src="@/assets/img/close.svg" />
      </div>
      <div class="main-content">
        <img class="app-logo" src="@/assets/logo.png" />
        <h3 class="title">Installer {{ appTitle }}</h3>
        <p class="description">
          Installez cette application sur <br>votre écran d'accueil
          pour y accéder rapidement et facilement !
        </p>
        <p class="description">
          Appuyez simplement <br> sur
          <img
            class="apple-navigation-action-img"
            src="@/assets/img/apple-navigation-action.png"
          />puis "Sur l'écran d'accueil"
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
.modal-wrapper {
  // border: 1px solid #09F9BF;
  margin: 20px;
  background: #2D2D33;
  position: relative;
  border-radius: 20px;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  .close {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #09F9BF;
    border-radius: 50%;

    img {
      width: 18px;
      height: 18px;
    }
  }

  .main-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .app-logo {
      max-width: 70px;
      margin-bottom: 20px;
    }

    .title {
      margin: 8px 0;
      text-align: center;
    }

    .description {
      margin: 8px 0;
      text-align: center;
    }

    .apple-navigation-action-img {
      max-width: 15px;
      margin: 0 10px;
    }
  }
}
</style>
