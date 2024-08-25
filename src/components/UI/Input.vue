<template>
    <section class="input">
        <Icon 
            class="input__magnifier" 
            name="magnifier" 
        />
        <input 
            class="input__text"
            type="text" 
            placeholder="Поиск"
            v-model="value"
        >
        <Icon 
            v-show="value"
            @click="store.cleanSearch()"
            class="input__cross" 
            name="cross" 
        />
    </section>
</template>

<script lang="ts" setup>
    import { useMainStore } from '@/stores/MainStore'
    const store = useMainStore()

    const value = defineModel('modelValue')

    defineOptions({
        name: 'Input'
    })
</script>

<style lang="scss" scoped>
    .input {
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;

        &__magnifier {
            position: relative;
            margin-right: -34px;
            width: 34px;
            height: 14px;
        }

        &__text {
            border: none;
            outline: none;
            border-radius: 5px;
            background-color: #f9f9f9;
            padding: 0 34px;
            height: 100%;
            font-size: 14px;
            flex: 1;
        }

        &__cross {
            position: relative;
            margin-left: -34px;
            width: 34px;
            height: 7px;
            cursor: pointer;
        }
    }
</style>