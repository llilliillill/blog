<template>
    <section class="filter">
        <div class="filter__search">
            <Search 
                v-model="store.search"
            />
        </div>
        <div 
            v-if="store.showTags"
            class="filter__tags"
        >
            <Tag 
                v-for="tag in store.tags" :key="tag.id" 
                :tag="tag"
                :active="store.checkActiveTag(tag.id)"
                @click="store.addTag(tag.id)"
            />
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { useMainStore } from '@/stores/MainStore'
    const store = useMainStore()
    
    defineOptions({
        name: 'Filter'
    })
</script>

<style lang="scss" scoped>
    .filter {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: white;

        &__search,
        &__tags {
            max-width: 1400px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        &__search {
            display: flex;
            justify-content: center;
        }
        
        &__tags {
            display: flex;
            padding: 20px 95px;
        }
    }

    /* Телефон */
    @media (max-width: 720px) {
        .filter {
            &__tags {
                padding: 10px;
            }
        }
    }
</style>