import { chatAction } from "./types"


export const chatPush = value => ({
    type: chatAction.CHAT_PUSH,
    payload: value
})