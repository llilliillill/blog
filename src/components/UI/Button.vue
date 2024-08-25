<template>
    <button :class="type">
        <slot />
    </button>
</template>

<script lang="ts" setup>
    defineOptions({
        name: 'Button'
    })

    defineProps<{
        type?: string
    }>()
</script>

<style lang="scss" scoped>
    button {
        border-radius: 5px;
        padding: 5px 10px;
        margin-left: 10px;
    }

    .cancel {
        border: 1px solid #eef6ff;
        background-color: #eef6ff;
        color: #3e97ff;
    }

    .public {
        border: 1px solid #3e97ff;
        background-color: #3e97ff;
        color: white;
    }

    .disabled {
        border: 1px solid #f9f9f9;
        background-color: #f9f9f9;
        color: #dcdce7;
        cursor: default;
    }
</style>