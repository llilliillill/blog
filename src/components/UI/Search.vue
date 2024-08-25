<template>
    <section class="search">
        <h1 class="search__title">Блог</h1>
        <Input class="search__input" v-model="value" />

        <div class="search__end">
            <FilterBtn 
                v-show="store.search || store.tagsActive.length"
                class="search__clean-button"
                @click="store.cleanFilter()"
            >
                Очистить
            </FilterBtn>

            <FilterBtn 
                class="search__show-button"
                @click="store.setShowTags()"
            >
                <div class="flex" v-if="store.showTags">
                    Скрыть фильтр <Icon class="search__icon" name="arrow-up" />
                </div>
                <div class="flex" v-else>
                    Фильтр <Icon class="search__icon" name="arrow-down" />
                </div>
            </FilterBtn>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { useMainStore } from '@/stores/MainStore'
    const store = useMainStore()

    const value = defineModel('modelValue')

    defineOptions({
        name: 'Search'
    })
</script>

<style lang="scss" scoped>
    .search {
        display: flex;
        padding: 20px 95px;
        align-items: center;
        flex: 1;

        &__end {
            display: flex;
            align-items: center;
            justify-content: end;
            height: 40px;
            flex: 1;
        }

        &__title {
            font-size: 32px;
            font-weight: bold;
            margin-right: 40px;
        }

        &__input {
            max-width: 350px;
        }

        &__clean-button {
            color: blue;
        }

        &__show-button {
            color: gray;
        }

        &__icon {
            padding-left: 5px;
        }
    }   

    /* Телефон */
    @media (max-width: 720px) {
        .search {
            flex-wrap: wrap;
            padding: 10px;

            &__title {
                font-size: 24px;
                margin-right: 0;
            }

            &__input {
                order: 1;
                max-width: none;
            }
        }
    }
</style>