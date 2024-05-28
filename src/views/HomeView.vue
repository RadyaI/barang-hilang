<template>
  <div>
    <navbarView :getTitle="state.title" @showNavbar="getNavbarStatus" @showCaraKerja="getCaraKerja" />
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

    <div class="element" :style="{ top: state.mousey + 'px', left: state.mousex + 'px' }"></div>

    <div class="cara-kerja animate__animated animate__fadeInDown"
      :class="{ 'animate__fadeOutDown': state.closeCaraKerja }" v-if="state.showCaraKerja">
      <div class="close"><i class="fa-solid fa-x icon" @click="closeCaraKerja"></i></div>
      <div class="wrapper">
        <div class="card">
          <div class="text">
            <h2>Menemukan Barang?</h2>
            <p>Jika kamu menemukan barang hilang kamu bisa lapor/upload barang tersebut di sini.</p>
          </div>
        </div>
        <div class="card">
          <div class="text">
            <h2>Kehilangan Barang?</h2>
            <p>Di website ini kamu bisa menemukan barang kamu di mana pun dengan mengingat ciri-ciri barang dan waktu
              hilang.</p>
          </div>
        </div>
        <div class="card">
          <div class="text">
            <h2>Ingin Mengambil Barang?</h2>
            <p>Barang yang hilang memiliki lokasi barang terakhir disimpan, kamu bisa berdiskusi dengan
              penemu barang.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import navbarView from '@/components/navbar.vue'
import 'animate.css'

import { onMounted, reactive } from 'vue';
export default {
  components: {
    navbarView
  },
  setup() {
    const state = reactive({
      mousex: 0,
      mousey: 0,

      title: 'BARANG HILANG',
      showNavbarPopup: false,
      showCaraKerja: false,
      closeCaraKerja: false,
    })

    const getNavbarStatus = (data) => {
      state.showNavbarPopup = data
      console.log(data)
    }

    const getCaraKerja = (data) => {
      state.showCaraKerja = data
    }

    const closeCaraKerja = () => {
      state.closeCaraKerja = true
      setTimeout(() => {
        state.closeCaraKerja = false
        state.showCaraKerja = false
      }, 1100);
    }

    const getCursor = (event) => {
      setTimeout(() => {
        state.mousex = event.clientX
        state.mousey = event.clientY
      }, 100);
    }

    onMounted(() => {
      document.addEventListener("mousemove", getCursor)
    })

    return {
      state,
      getNavbarStatus,
      getCaraKerja,
      closeCaraKerja,
      getCursor
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
  background-clip: text;
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
  cursor: pointer;
  font-weight: 500;
  font-size: 1.1rem;
  border-radius: 7px;
}

.btn-cari {
  background-color: var(--text-color);
  border: none;
  transition: color 0.3s, background-color 0.3s, border 0.3s;
}

.btn-cari:hover {
  background-color: var(--secondary-color);
  color: var(--text-color);
  /* border: 1px solid green; */
}

.btn-lapor {
  background-color: var(--secondary-color);
  color: var(--text-color-second);
  border: none;
  transition: background-color 0.3s, color 0.3s;
}

.btn-lapor:hover {
  background-color: var(--text-color);
  color: var(--secondary-color);
}

.element {
  filter: blur(80px);
  border-radius: 50%;
  position: fixed;
  background-color: var(--text-color);
  /* background-color: white; */
  width: 100px;
  height: 100px;
}

.cara-kerja {
  /* border: 1px solid yellow; */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cara-kerja .wrapper {
  /* border: 1px solid var(--text-color); */
  width: 90%;
  height: 50%;
}

.cara-kerja .close {
  /* border: 1px solid red; */
  color: white;
  width: 90%;
  padding-bottom: 15px;
  font-size: 1.4rem;
  display: flex;
  justify-content: end;
}

.cara-kerja .close .icon {
  margin-right: 38px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid var(--text-color);
  cursor: pointer;
}

.cara-kerja .wrapper .card {
  border: none;
  border-radius: 20px;
  margin: 20px;
  width: 30%;
  height: 99%;
  background-color: var(--secondary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 0.1s;
}

.cara-kerja .wrapper .card:hover {
  border: 1px solid var(--text-color);
}

.cara-kerja .wrapper .card .text {
  /* border: 1px solid white; */
  width: 90%;
  height: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cara-kerja .wrapper .card .text h2 {
  color: var(--text-color);
  font-size: 2rem;
}

@media only screen and (max-width:700px) {
  .wrapper .card h1 {
    font-size: 3rem;
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
    width: fit-content;
  }

  .cara-kerja .wrapper {
    /* border: 1px solid white; */
    width: 90%;
    height: 60%;
    overflow-x: scroll;
    display: flex;
  }

  .cara-kerja .wrapper::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  .cara-kerja .wrapper::-webkit-scrollbar-thumb {
    background: var(--text-color);
    border-radius: 10px;
  }

  .cara-kerja .wrapper::-webkit-scrollbar-track {
    background: var(--secondary-color);
  }

  .cara-kerja .wrapper .card {
    min-width: 80%;
    height: 80%;
  }

  .element {
    margin-bottom: -50px;
    margin-right: -80px;
  }
}
</style>
