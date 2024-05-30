<template>
    <div>
        <navbar />
        <div class="container"></div>
    </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
import router from '@/router';
import Cookies from 'js-cookie';
import { onMounted } from 'vue';

export default {
    name: 'app',
    components: {
        navbar
    },
    setup() {
        onMounted(() => {
            if (!Cookies.get('isLoggedIn')) {
                router.push('/')
            }
        })
    }
}
</script>

<style scoped></style>