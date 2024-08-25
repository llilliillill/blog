<template>
    <Filter />

    <section 
        class="blog" 
        v-if="store.getFilterPosts().length"
    >
        <Post 
            v-for="post in store.getFilterPosts()" 
            :key="post.id" 
            :post="post"
            @click="store.openPost(post)"
        />
    </section>

    <Empty v-else />
</template>

<script lang="ts" setup>
    import { useMainStore } from '@/stores/MainStore'
    const store = useMainStore()
</script>

<style lang="scss" scoped>
    .blog {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background: white;
        border-radius: 10px;
        max-width: 1300px;
        width: 100%;
        margin: 20px auto;
        padding: 30px 10px 30px 30px;
    }

    /* Планшет */
    @media (max-width: 800px) {
        .blog {
            max-width: 780px;
            padding: 15px 0 15px 15px;
        }
    }

    /* Телефон */
    @media (max-width: 400px) {
        .blog {
            max-width: 355px;
        }
    }
</style>