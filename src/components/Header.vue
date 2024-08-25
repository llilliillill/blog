<template>
    <header class="header">
        <nav class="header__content">
            <Icon 
                class="header__menu"
                src="/img/icons/menu.svg" 
                size="32"
            />
            <Logo />
            <div class="header__buttons">
                <MenuBtn to="/">Главная</MenuBtn>
                <MenuBtn to="/blog">Блог</MenuBtn>
            </div>
        </nav>
    </header>
</template>

<script lang="ts" setup>
    defineOptions({
        name: 'Header'
    })
</script>

<style lang="scss" scoped>
    .header {
        background: #1E1E1E;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 80px;
        width: 100%;

        &__content {
            max-width: 1400px;
            width: 100%;
            height: 32px;
            display: flex;
        }

        &__menu {
            padding-right: 10px;
            cursor: pointer;
            display: none;
        }

        &__buttons {
            display: flex;
            margin-left: 70px;
        }
    }

    /* Планшет */
    @media (max-width: 800px) {
        .header {
            padding: 15px;

            &__menu {
                display: block;
            }

            &__buttons {
                display: none;
            }
        }
    }
</style>