<template>
    <div>
        <nav>
            <div class="title">
                <div class="list"><router-link to="/">BARANG HILANG</router-link></div>
            </div>
            <div class="menu" v-if="state.width > 750">
                <div class="list" @click="registerBarang"
                    :class="{ selected: state.currentDisplay == 'registerBarang' }">Register Barang</div>
                <div class="list" v-if="state.isLoggedIn" @click="LogOut">LogOut</div>
                <div class="list" @click="showLogin" v-else>Login</div>
                <div class="cara-kerja" @click="showCaraKerja">Cara Kerja?</div>
            </div>
            <div class="menu" v-else>
                <div class="list"><i class="icon fa-solid fa-bars" @click="navbarPopup"></i></div>
            </div>
        </nav>


        <div class="navbar-modal animate__animated animate__fadeIn" :class="{ 'animate__fadeOut': state.closeModal }"
            v-if="state.showNavbarPopup">
            <div class="navbar-body">
                <div class="navbar-close"><i @click="closeModal" class="fa-solid fa-x"></i></div>
                <div class="navbar-menu">
                    <div class="list">Register Barang</div>
                    <div class="list" v-if="state.isLoggedIn" @click="LogOut">LogOut</div>
                    <div class="list" @click="showLogin" v-else>Login</div>
                    <div class="list" @click="showCaraKerja">Cara Kerja?</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import router from '@/router';
import 'animate.css'
import Cookies from 'js-cookie';
import swal from 'sweetalert';
import { onMounted, reactive } from 'vue';
export default {
    name: 'app',
    props: ['getTitle','currentDisplay'],
    setup(props, { emit }) {
        const state = reactive({
            currentDisplay: props.currentDisplay,

            title: props.getTitle,
            width: innerWidth,
            showNavbarPopup: false,
            closeModal: false,

            isLoggedIn: !!Cookies.get('isLoggedIn')
        })

        function registerBarang() {
            state.currentDisplay = "registerBarang"
            if (!Cookies.get('isLoggedIn')) {
                showLogin()
            } else {
                router.push('/user/barang/register')
            }
        }

        const showLogin = () => {
            emit('showLogin', true)
            closeModal()
        }

        const navbarPopup = () => {
            state.showNavbarPopup = true
            emit('showNavbar', state.showNavbarPopup)
        }

        const showCaraKerja = () => {
            emit('showCaraKerja', true)
            closeModal()
        }

        const closeModal = () => {
            state.closeModal = true
            setTimeout(() => {
                state.showNavbarPopup = false
                state.closeModal = false
            }, 1100);
        }

        const updateWidth = () => {
            state.width = window.innerWidth
        }

        const LogOut = () => {
            swal({
                icon: 'warning',
                title: 'Mau LogOut?',
                buttons: ['Tidak', 'Iya']
            }).then(
                (next) => {
                    if (next) {
                        localStorage.clear()
                        Cookies.remove('isLoggedIn')
                        router.push('/')
                    }
                }
            )
        }

        onMounted(() => {
            window.addEventListener('resize', updateWidth)
        })

        return {
            state,
            navbarPopup,
            closeModal,
            showCaraKerja,
            showLogin,
            registerBarang,
            LogOut
        }
    }
} 
</script>

<style scoped>
nav {
    width: 100%;
    border: 1px solid black;
    background-color: var(--primary-color);
    color: var(--text-color-second);
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid var(--secondary-color);
}

nav .title {
    /* border: 1px solid white; */
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    margin-left: 20px;
    font-weight: bolder;
    cursor: pointer;
    user-select: none;
}

nav .title .list {
    transition: color 0.2s;
}

nav .title .list:hover {
    color: var(--text-color);
}

nav .menu {
    /* border: 1px solid white; */
    margin-right: 75px;
    display: flex;
    width: 35%;
    justify-content: space-around;
    align-items: center;
}

nav .menu .list {
    cursor: pointer;
    transition: color 0.3s;
}

nav .menu .cara-kerja {
    background-color: var(--text-color);
    padding: 6px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border 0.3s;
    color: var(--primary-color);
    font-weight: 500;
}

nav .menu .cara-kerja:hover {
    background-color: var(--secondary-color);
    color: var(--text-color);
    border: 1px solid var(--text-color);
}

nav .menu .list:hover {
    color: var(--text-color);
}

.navbar-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navbar-modal .navbar-body {
    border: 1px solid var(--text-color);
    /* border: none; */
    width: 80%;
    height: 60vh;
    background-color: var(--secondary-color);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
}

.navbar-modal .navbar-body .navbar-close {
    /* border: 1px solid white; */
    width: 95%;
    height: 15%;
    padding-top: 5px;
    font-size: 1.5rem;
    color: var(--text-color-second);
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.fa-x {
    padding: 10px 15px;
    border-radius: 10px;
    border: 1px solid var(--text-color-second);
}

.navbar-body .navbar-menu {
    margin: 0 auto;
    margin-top: 20px;
    width: 90%;
    height: 50%;
    color: var(--text-color-second);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    font-size: 1.2rem;
}

.navbar-body .navbar-menu .list {
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--text-color-second);
}

.blur {
    filter: blur(10px)
}

.selected {
    color: var(--text-color);
}

@media only screen and (max-width:750px) {
    .menu .list {
        font-size: 2.2rem;
        display: flex;
    }

    nav .menu {
        margin-right: 0px;
    }
}

.selected {
    color: var(--text-color);
}
</style>