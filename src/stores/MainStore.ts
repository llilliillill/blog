import './types.ts'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import Posts from '@/assets/data/posts'

export const useMainStore = defineStore('MainStore', () => {
    
    const search = ref<string>('')
    const tagsActive = ref<number[]>([])
    const showTags = ref<boolean>(false)
    const posts = ref<Post[]>(Posts)
    const post = ref<Post | null>(null)
    const showComForm = ref<boolean>(false)
    const comment = ref<string>('')
    const comLength = ref<number>(0)
    const comError = ref<boolean>(false)

    const tags = ref<Tag[]>([
        { id: 1, title: 'Город' },
        { id: 2, title: 'Природа' },
        { id: 3, title: 'Люди' },
        { id: 4, title: 'Животные' },
        { id: 5, title: 'Еда' },
        { id: 6, title: 'Напитки' },
        { id: 7, title: 'Архитектура' },
        { id: 8, title: 'Искусство' }
    ])

    const comments = ref<Comments[]>([
        { 
            id: 1, 
            name: 'Мира Гусева', 
            avatar: '/img/users/Mira.png',
            text: 'Эти мгновения наполняют наши сердца радостью и любовью.',
            date: '9.04.2024 в 14:54'
        }
    ])

    const getFilterPosts = () => {
        if (search.value || tagsActive.value.length) {
            return posts.value.filter((post: Post) => {
                if (tagsActive.value.length) { 
                    return checkSearch(post.title) && checkTags(post.tags)
                } else {
                    return checkSearch(post.title)
                }
            })
        } else {
           return posts.value
        }
    } 

    const checkSearch = (title: string) => {
        return title.toLowerCase().includes(search.value.toLowerCase().trim())
    }

    const checkTags = (tags: Tag[]) => {
        let result = false
        tags.forEach(tag => {
            if (tagsActive.value.includes(tag.id)) {
                result = true
            }
        })
        return result
    }

    const addTag = (id: number) => {
        if (!tagsActive.value.includes(id)) {
            tagsActive.value.push(id)
        } else {
            tagsActive.value = tagsActive.value.filter(
                idTag => idTag !== id
            )
        }
    }

    const setShowTags = () => {
        showTags.value = !showTags.value
    }

    const setComForm = () => {
        showComForm.value = !showComForm.value
    }

    const cleanFilter = () => {
        search.value = ''
        tagsActive.value = []
    }

    const cleanSearch = () => {
        search.value = ''
    }

    const checkActiveTag = (id: number) => {
        return tagsActive.value.includes(id)
    }

    const openPost = (Post?: Post) => {
        if (Post) { 
            post.value = Post
        } else {
            post.value = null
        }
    }

    const closePost = () => {
        post.value = null
    }

    const cleanComment = () => {
        comLength.value = 0
        comment.value = ''
        comError.value = false
    }

    const checkComLength = () => {
        comLength.value = comment.value.length
        comError.value = comLength.value > 250 ? true : false
    }

    const getComDate = () => {
        const date = new Date().toLocaleString('ru', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        })

        const time = new Date().toLocaleString('ru', {
            hour: 'numeric',
            minute: 'numeric'
        })

        return `${ date } в ${ time }`
    }

    const saveComment = () => {
        if (comment.value !== '' && comLength.value <= 250) {
            comments.value.push({
                id: Date.now(),
                name: 'John Rapira',
                avatar: '/img/users/John.png',
                text: comment.value,
                date: getComDate()
            })
            cleanComment()
        }
    }

    return {
        search,
        tags,
        tagsActive,
        addTag,
        checkActiveTag,
        showTags,
        setShowTags,
        cleanFilter,
        cleanSearch,
        posts,
        post,
        openPost,
        closePost,
        comments,
        comment,
        cleanComment,
        saveComment,
        showComForm,
        setComForm,
        comLength,
        checkComLength,
        comError,
        getFilterPosts
    }
})