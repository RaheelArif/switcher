import React from 'react'
import { chatAction } from "../action/types"
const initailState = {
    chat: {
        messages: [
            {
                message: <p><img className="chat-icon" src="images/icons/grin-tongue-regular.svg" alt="chat-icon1" /> Hi there, <img className="chat-icon" src="images/icons/grin-tongue-regular.svg" alt="chat-icon1" /> let’s figure out how much we can save you <img className="chat-icon" src="images/icons/grin-tongue-regular.svg" alt="chat-icon1" /> on the cost of you home. </p>,
                index: 0
            },
            {
                message: <p><img className="chat-icon" src="images/icons/grin-tongue-regular.svg" alt="chat-icon1" /> Don’t worry  this will only take a few seconds <img className="chat-icon" src="images/icons/grin-tongue-regular.svg" alt="chat-icon1" /></p>,
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