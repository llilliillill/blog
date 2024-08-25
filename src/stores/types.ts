interface Tag {
    id: number,
    title: string
}

interface Post {
    id: number,
    title: string,
    preview: string,
    body: string,
    image: string,
    date: number,
    time: number,
    comments: number,
    tags: Tag[]
}

interface Comments {
    id: number,
    name: string, 
    avatar: string,
    text: string,
    date: string
}

interface Users {
    id: number,
    username: string,
    avatar: string
}