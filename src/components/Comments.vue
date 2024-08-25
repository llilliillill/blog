<template>
    <section class="comments">
        <Title class="comments__title">
            Комментариев 
            <span class="comments__count">
                {{ store.comments.length }}
            </span>
        </Title>

        <div 
            class="comments__text"
            v-if="!store.showComForm" 
            @click="store.setComForm()"
        >
            Введите комментарий
        </div>

        <CommentForm 
            v-else
            class="comments__form" 
        />

        <CommentList 
            class="comments__list" 
            :comments="store.comments"
        />
    </section>
</template>

<script lang="ts" setup>
    import { useMainStore } from '@/stores/MainStore'
    const store = useMainStore()

    defineOptions({
        name: 'Comments'
    })
</script>

<style lang="scss" scoped>
    .comments {
        max-width: 600px;
        width: 100%;
        padding: 10px 0;

        &__title {
            font-size: 18px;
        }

        &__count {
            color: grey;
        }

        &__text {
            border: 1px solid #f5f5f5;
            color: #d8d8e5;
            padding: 10px;
            margin: 10px 0;
            border-radius: 10px;
            padding: 15px;
            font-size: 14px;
            width: 100%;
            cursor: pointer;
        }
    }
</style>