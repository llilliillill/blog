<template>
    <RouterLink 
        :class="[$route.path === to ? 'active' : '', 'menu-button']" 
        @click="store.closePost()"
        :to="to"
    >
        <slot />
    </RouterLink>
</template>

<script lang="ts" setup>
    import { useMainStore } from '@/stores/MainStore'
    const store = useMainStore()

    defineOptions({
        name: 'MenuBtn'
    })

    defineProps<{
        to: string
    }>()
</script>

<style lang="scss" scoped>
    .menu-button {
        display: flex;
        align-items: center;
        padding: 0 15px;
        margin-left: 10px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 16px;
    }

    .active {
        background-color: #3a3a3a;
        color: #3E97FF;
    }
</style>