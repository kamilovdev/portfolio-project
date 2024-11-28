<template>
    <div class="wrapper">
        <div class="nav-container">
                <nav>
                    <h1>Amirbek <span></span></h1>

                <ul>
                    <RouterLink to="/" class="nav-link" exact-active-class="active">Home</RouterLink>
                    <RouterLink to="/blogs" class="nav-link" active-class="active">Blogs</RouterLink>
                    <li><img src="../../public/navbar/Instagram.svg"><a href="#">Instagram</a></li>
                    <li><img src="../../public/navbar/Discoard.svg"><a href="#">Discord</a></li>
                    <li><img src="../../public/navbar/Github.svg"><a href="#">Github</a></li>
                </ul>
                </nav>
        </div>    
    </div>
</template>

<script setup></script>

<style scoped>

.nav-link.active {
  color: #12F7D6;
}

</style>