<template>
    <ul class="list">
        <li 
            class="list__comment"
            v-for="comment in comments" 
            :key="comment.id"
        >
            <img 
                class="list__avatar" 
                :src="comment.avatar"
            >
            <div class="list__content">
                <p class="list__title">{{ comment.name }}</p>
                <div class="list__text">{{ comment.text }}</div>
                <div class="list__date">{{ comment.date }}</div>
            </div>
        </li>
    </ul>
</template>

<script lang="ts" setup>
    defineOptions({
        name: 'CommentList'
    })

    defineProps<{
        comments: {
            id: number,
            name: string, 
            avatar: string,
            text: string,
            date: string
        }[]
    }>()
</script>

<style lang="scss" scoped>
    .list {
        &__comment {
            padding: 10px;
            display: flex;
            cursor: default;
        }

        &__avatar {
            width: 40px;
            height: 40px;
            border-radius: 50px;
        }

        &__content {
            margin: 0 10px;
            flex: 1;
        }

        &__title {
            font-size: 15px;
            font-weight: bold;
        }

        &__text {
            font-size: 14px;
            font-weight: 600;
        }

        &__date {
            font-size: 14px;
            color: grey;
        }
    }
</style>