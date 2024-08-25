<template>
    <section class="post-info">
        <span class="post-info__date">
            {{ date }} Апр
        </span>

        <span class="post-info__dot">•</span>

        <span class="post-info__time">
            <Icon class="post-info__icon" name="clock" />
            <span>{{ time }} мин</span>
        </span>

        <span class="post-info__dot">•</span>

        <span class="post-info__comments">
            <Icon class="post-info__icon" name="comment" />
            <span>{{ comments }} комментариев</span>
        </span>
    </section>
</template>

<script lang="ts" setup>
    defineOptions({
        name: 'PostInfo'
    })

    defineProps<{
        date: string,
        time: string,
        comments: string
    }>()
</script>

<style lang="scss" scoped>
    .post-info {
        color: gray;
        display: flex;
        padding: 10px 0 5px 0;

        &__date,
        &__time,
        &__comments,
        &__dot {
            display: flex;
            font-size: 14px;
        }

        &__icon {
            padding-right: 2px;
        }

        &__dot {
            padding: 0 10px;
        }
    }
</style>