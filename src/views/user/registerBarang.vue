<template>
    <div>
        <navbar :currentDisplay="state.currentDisplay" />
        <div class="container">
            <div class="home">
                <button class="home-btn"><router-link to="/">Home</router-link></button>
            </div>
            <div class="wrapper-text">
                <h2>Barang kamu hilang?</h2>
                <p>Apakah kamu melupakan atau kehilangan barangmu disuatu tempat? <b>di Stasiun? di Hotel? di Taman?
                        Atau dimanapun
                        itu?.</b> <br>Yuk coba laporkan barang kamu yang hilang di sini! kamu hanya perlu mengisi form
                    di bawah ini dengan mengisi: <br><br>
                <ol>
                    <li>- Deskripsi Barang</li>
                    <li>- Waktu Hilang</li>
                    <li>- Tempat Terakhir</li>
                    <li>- Foto Barang (Opsional)</li>
                </ol>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
import router from '@/router';
import Cookies from 'js-cookie';
import { onMounted, reactive } from 'vue';

export default {
    name: 'app',
    components: {
        navbar
    },
    setup() {
        const state = reactive({
            currentDisplay: "registerBarang"
        })

        onMounted(() => {
            if (!Cookies.get('isLoggedIn')) {
                router.push('/')
            }
        })

        return {
            state
        }
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    background-color: var(--primary-color);
}

.home {
    /* border: 1px solid white; */
    width: 93.3%;
    height: 50px;
    margin: 0 auto;
    margin-top: 10px;
    padding: 20px 0px;
}

.home .home-btn {
    border-radius: 10px;
    cursor: pointer;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    color: var(--primary-color);
    font-weight: bolder;
    background-color: var(--secondary-color);
    border: 1px solid var(--text-color);
    color: var(--text-color-second);
    transition: transform 0.2s;
}

.home .home-btn:hover {
    transform: scale(0.9);
    border: none;
}

.wrapper-text {
    /* border: 1px solid white; */
    background-color: var(--secondary-color);
    border-radius: 15px;
    margin: 0 auto;
    margin-top: 10px;
    width: 90%;
    height: fit-content;
    padding: 20px 20px;
    color: var(--text-color-second);
    /* border: none; */
    transition: border 0.2s;
}

.wrapper-text:hover {
    border: 1px solid var(--text-color);
}

.wrapper-text h2 {
    margin-bottom: 10px;
}

@media only screen and (max-width:700px) {
    .home{
        margin-left: 18px;
    }
    .wrapper-text{
        width: 80%;
    }
}
</style>