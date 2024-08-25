<template>
    <section :class="[
        big ? 'post-big' : '', 
        'post'
    ]">
        <img :class="[
                big ? 'post-big__image' : '', 
                'post__image'
            ]" 
            :src="`/img/posts/${ post?.image }`"
        >

        <PostInfo :class="[
            big ? 'post-big__info' : '', 
            'post__info'
        ]"
            :date="post?.date"
            :time="post?.time"
            :comments="post?.comments"
        />

        <Title
            :class="[
                big ? 'post-big__title' : '', 
                'post__title'
            ]"
        >
            {{ post?.title }}
            <button 
                :class="[
                    big ? 'post-big__close' : '', 
                    'post__close'
                ]"
                @click="store.openPost()"
            >
                <Icon name="cross" />
            </button>
        </Title>

        <span class="post__body">
            {{ big ? post?.body : post?.preview }}
        </span>

        <div class="post__tags">
            <Tag 
                v-for="tag in post?.tags" :key="tag?.id" 
                :tag="tag" 
                :button="false"
            />
        </div>

        <Comments 
            class="post__comments"
            v-show="big" 
        />
    </section>
</template>

<script lang="ts" setup>
    import { useMainStore } from '@/stores/MainStore'
    const store = useMainStore()

    defineOptions({
        name: 'Post'
    })

    defineProps<{
        post: {
            id: number,
            title: string,
            preview: string,
            body: string,
            image: string,
            date: number,
            time: number,
            comments: number
            tags: any[]
        },
        big?: boolean
    }>()
</script>

<style lang="scss" scoped>
    .post {
        max-width: 400px;
        width: 100%;
        margin: 0 20px 20px 0;
        display: flex;
        flex-direction: column;
        cursor: default;

        &__image {
            width: 400px;
            height: 250px;
            border-radius: 10px;
            cursor: pointer;
        }

        &__title {
            width: 100%;
            font-size: 22px;
        }

        &__body {
            padding-bottom: 10px;
            font-size: 16px;
            font-weight: 600;
        }

        &__tags {
            display: flex;
        }

        &__close {
            font-size: 10px;
            float: right;
            margin-top: 16px;
            display: none;
        }
    }

    /* Пост большого размера */
    .post-big {
        max-width: 600px;

        &__image {
            width: 600px;
            height: 373px;
            cursor: default;
            margin: 15px 0;
        }

        &__title {
            order: -2;
            font-size: 24px;
            padding-top: 10px;
        }

        &__info {
            order: -1;
        }

        &__close {
            display: block;
        }
    }

    /* Планшет */
    @media (max-width: 800px) {
        .post {
            max-width: 362px;

            &__image {
                width: 362px;
                height: 220px;
            }
        }
    }

    /* Телефон */
    @media (max-width: 400px) {
        .post {
            max-width: 325px;

            &__image {
                width: 325px;
                height: 200px;
            }

            &__title {
                font-size: 20px;
            }

            &__body {
                font-size: 14px;
            }
        }
    }
</style>