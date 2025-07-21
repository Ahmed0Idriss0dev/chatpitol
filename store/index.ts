import { create } from 'zustand'

type Message = {
  sender: 'user' | 'bot'
  content: string
}

type ChatStore = {
  messages: Message[]
  addMessage: (msg: Message) => void ,
  loading:boolean ,
  setLoading :()=> void
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  loading:false ,
  setLoading() {
      set((state) => ({
      loading: state.loading ? false : true,
    }))
  },
  addMessage: (msg) =>
    set((state) => ({
      messages: [...state.messages, msg],
    })),
}))
