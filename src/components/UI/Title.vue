<template>
    <h1 
        class="title" 
        :style="{ fontSize: `${ size }px` }" 
    >
        <slot />
    </h1>
</template>

<script lang="ts" setup>
    defineOptions({
        name: 'Title'
    })

    defineProps<{
        size: string
    }>()
</script>

<style lang="scss" scoped>
    .title {
        font-size: 20px;
        font-weight: bold;
        margin-right: 10px;
        cursor: default;
    }
</style>