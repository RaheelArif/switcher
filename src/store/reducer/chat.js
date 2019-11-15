import { chatAction } from "../action/types"
const initailState = {
    chat: {
        messages: [
            {
                message: "Let's start with a few details. This should only take a couple of minutes.",
                index: 0
            }
        ]
    }
}

const chatReducer = (state = initailState, action) => {
    switch (action.type) {
        case chatAction.CHAT_PUSH:

            const messages = [...state.chat.messages, ...action.payload]
            return { ...state, chat: { ...state.chat, messages } }


        default:
            return state
    }
}

export default chatReducer