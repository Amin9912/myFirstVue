<template>
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Home</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarColor01">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
                <NavBar />
            </div>
        </div>
        </nav>
</template>

<script>
import NavBar from "./MiniCart.vue"
export default {
    components:{
        NavBar
    },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>