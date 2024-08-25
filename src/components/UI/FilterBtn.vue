<template>
    <button class="filter-button">
        <slot />
    </button>
</template>

<script lang="ts" setup>
    defineOptions({
        name: 'FilterBtn'
    })
</script>

<style lang="scss" scoped>
    .filter-button {
        padding: 0 5px;
        font-size: 14px;
    }
</style>