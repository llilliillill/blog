<template>
    <img 
        class="logo"
        src="/img/logo.svg" 
        alt="logo"
    >
</template>

<script lang="ts" setup>
    defineOptions({
        name: 'Logo'
    })
</script>

<style lang="scss" scoped>
    .logo {
        width: 150px;
        height: 32px;
        cursor: default;
    }
</style>