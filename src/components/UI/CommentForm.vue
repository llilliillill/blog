<template>
    <form @submit.prevent class="form">
        <div class="form__wrapper">
            <textarea 
                v-model="store.comment"
                :class="[
                    store.comError ? 'error__text' : '', 
                    'form__text'
                ]" 
                placeholder="Текст комментария"
                @input="store.checkComLength()"
                autofocus
            ></textarea>
            <button 
                class="form__clean"
                @click.stop="store.cleanComment()"
                v-show="store.comment"
            >
                <Icon name="cross" />
            </button>
        </div>
        <span class="form__length">
            <span :class="[
                store.comError ? 'error__length__number' : '', 
                'form__length__number'
            ]">
                {{ store.comLength }}
            </span> из 250 символов
        </span>

        <div class="form__buttons">
            <Button 
                class="form__buttons__cancel"
                @click="store.setComForm()"
                type="cancel"
            >
                Отмена
            </Button>
            <Button 
                class="form__buttons__public"
                @click="store.saveComment()"
                :type="store.comment && !store.comError ? 'public' : 'disabled'"
            >
                Опубликовать
            </Button>
        </div>
    </form>
</template>

<script lang="ts" setup>
    import { useMainStore } from '@/stores/MainStore'
    const store = useMainStore()

    defineOptions({
        name: 'CommentForm'
    })
</script>

<style lang="scss" scoped>
    .form {
        &__wrapper {
            display: flex;
            justify-content: end;
            align-items: start;
            margin-top: 10px;
        }

        &__text {
            outline: 2px solid #c1ddff;
            border: 2px solid #3e97ff;
            padding: 10px 15px;
            border-radius: 10px;
            font-size: 14px;
            width: 100%;
            height: 131px;
            resize: none;
        }

        &__clean {
            position: relative;
            width: 25px;
            margin: 17px 0 0 -25px;
        }

        &__length {
            color: gray;
            font-size: 14px;
        }

        &__buttons {
            display: flex;
            justify-content: end;
        }
    }

    .error {
        &__text {
            outline: 2px solid #fac2d0;
            border: 2px solid #f1416c;
        }

        &__length {
            &__number {
                color: #f1416c;
                font-weight: 600;
            }
        }
    }
</style>