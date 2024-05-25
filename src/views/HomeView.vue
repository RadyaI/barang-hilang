<template>
  <div>
    <navbarView :getTitle="state.title" @showNavbar="getNavbarStatus" />
    <div class="container">
      <div class="wrapper">
        <div class="card">
          <h1>Cari Barang Kamu di Sini!</h1>
          <p>Ingin Mencari Barang Kamu Yang Hilang? Atau Ingin Melaporkan Barang Hilang?</p>
          <div class="button-menu">
            <button class="btn-cari">Cari Barang ? </button>
            <button class="btn-lapor">Lapor Barang ! </button>
          </div>
        </div>
      </div>
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

.wrapper {
  /* border: 1px solid white; */
  margin-top: 10px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper .card {
  /* border: 1px solid white; */
  width: 70%;
  height: 70%;
}

.wrapper .card h1 {
  text-align: center;
  font-size: 4rem;
  background-image: linear-gradient(to right, var(--text-color), #efefef);
  -webkit-background-clip: text;
  color: transparent;
  cursor: crosshair;
}


.wrapper .card p {
  color: var(--text-color-second);
  font-weight: 400;
  text-align: center;
  margin-top: 20px;
  font-size: 1.1rem;
}

.wrapper .card .button-menu {
  /* border: 1px solid white; */
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.wrapper .card .button-menu button {
  margin: 20px;
  padding: 5px 20px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.1rem;
  border-radius: 7px;
}

.btn-cari {
  background-color: var(--text-color);
}

.btn-lapor {
  background-color: var(--secondary-color);
  color: var(--text-color-second);
}

@media only screen and (max-width:700px) {
  .wrapper .card h1 {
    font-size: 2rem;
  }

  .wrapper .card p {
    font-size: 1rem;
  }

  .wrapper .card {
    width: 100%;
  }

  .wrapper .card .button-menu button {
    font-size: 1rem;
    padding: 7px 20px;
  }
}
</style>
