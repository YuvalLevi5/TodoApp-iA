<template>
    <div @click="toggleMenu" class="screen"></div>

    <header class="main-header">
        <div class="main-layout flex  flex-center">
            <div class="logo header-logo">TodoApp - Africa Innovation</div>
        </div>
    </header>
</template>
<script>
export default {
    methods: {
        toggleMenu() {
            document.body.classList.toggle('menu-open')
        },
    }
}
</script>

<style lang="scss" scoped>

</style>

<!-- function x(num) {
    return num.toLocaleString('en-US', {maximumFractionDigits:2})
   } -->