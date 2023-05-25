export type Post = {
  userId: number
  id: number
  title: string
  body: string
  tags: string[]
  reactions: number
}

export type Comment = {
  postId: number
  id: number
  user: {
    id: number
    username: string
  }
  body: string
}

export type Tab = {
  title: string
  content: string
}

export type Todo = {
  id: number
  todo: string
  completed: boolean
  userId: number
}
