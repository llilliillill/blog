<template>
    <section class="empty">
        <img 
            class="empty__image" 
            src="/img/icons/empty.svg"
        >
        <p class="empty__title">
            Поиск не дал результатов
        </p>
        <div class="empty__text">
            Повторите поиск или используйте 
            фильтр для структуризации контента
        </div>
    </section>
</template>

<script lang="ts" setup>
    defineOptions({
        name: 'Empty'
    })
</script>

<style lang="scss" scoped>
    .empty {
        max-width: 1400px;
        width: 100%;
        margin: 20px auto;
        border-radius: 10px;
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 80px 0;
        color: gray;
        cursor: default;

        &__image {
            width: 60px;
            height: 60px;
        }

        &__title {
            font-size: 18px;
            font-weight: bold;
        }

        &__text {
            width: 350px;
            font-size: 16px;
            text-align: center;
        }
    }
</style>