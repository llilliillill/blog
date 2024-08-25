<template>
    <section class="modal">
        <div class="modal__content">
            <slot />
        </div>
    </section>
</template>

<script lang="ts" setup>
    defineOptions({
        name: 'Modal'
    })
</script>

<style lang="scss" scoped>
    .modal {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.336);
        position: fixed;
        z-index: 9999;
    }

    .modal__content {
        background: white;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
    }
</style>