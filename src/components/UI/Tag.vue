<template>
    <div :class="[active ? 'active' : '', 'tag']">
        <span class="tag__title">
            {{ tag.title }}
        </span>

        <button 
            v-show="button"
            class="tag__add"
        >
            <Icon v-if="active" name="check" size="20" />
            <Icon v-else name="plus" />
        </button>
    </div>
</template>

<script lang="ts" setup>
    defineOptions({
        name: 'Tag'
    })

    withDefaults(
        defineProps<{
            tag: {
                id: number,
                title: string
            },
            active?: boolean,
            button?: boolean
        }>(), {
            active: false,
            button: true
        }
    )
</script>

<style lang="scss" scoped>
    .tag {
        display: flex;
        align-items: center;
        border-radius: 50px;
        background-color: #eef6ff;
        color: #2884ef;
        padding: 0 5px;
        height: 32px;
        margin: 0 10px 5px 0;
        cursor: default;

        &__title {
            padding: 0 10px;
        }

        &__add {
            padding-right: 7px;
            font-size: 17px;
            font-weight: bold;
            cursor: pointer;
        }
    }

    .active {
        background-color: #3e97ff;
        color: white;
    }

    /* Телефон */
    @media (max-width: 720px) {
        .tag {
            padding: 0;
            height: 28px;
        }
    }
</style>