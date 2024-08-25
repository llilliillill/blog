<template>
    <img 
        :width="size" :height="size" 
        :src="`/img/icons/${ name }.svg`"
    >
</template>

<script lang="ts" setup>
    defineOptions({
        name: 'Icon'
    })

    defineProps<{
        name: string,
        size?: string
    }>()
</script>