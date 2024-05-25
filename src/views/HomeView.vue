<template>
  <div>
    <navbarView :getTitle="state.title" @showNavbar="getNavbarStatus" />
    <div class="container">
    </div>
  </div>
</template>

<script>
import navbarView from '@/components/navbar.vue'

import { reactive } from 'vue';
export default {
  components: {
    navbarView
  },
  setup() {
    const state = reactive({
      title: 'BARANG HILANG',
      showNavbarPopup: false
    })

    const getNavbarStatus = (data) => {
      state.showNavbarPopup = data
      console.log(data)
    }

    return {
      state,
      getNavbarStatus
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background-color: var(--primary-color);
  color: var(--text-color-second)
}
</style>
