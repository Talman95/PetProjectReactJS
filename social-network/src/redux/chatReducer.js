const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

const initialState = {
    chatInfo: [
        { id: 0, name: 'Anna', message: 'Hi, friend' },
        { id: 1, name: 'Roman', message: 'Hey, how are you?' },
        { id: 3, name: 'Anna', message: 'Awesome! What to buy for dinner' },
        { id: 4, name: 'Roman', message: 'I don\'t know, I need to think about it' }
    ],
    newMessageText: ""
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            let newMessage = {
                id: 5, name: 'Roman', message: state.newMessageText
            }
            return { ...state, chatInfo: [...state.chatInfo, newMessage] }
        case 'UPDATE_MESSAGE_TEXT':
            return { ...state, newMessageText: action.newText }
        default:
            return state;
    }
}

export default chatReducer;

export const sendMessageAction = () => ({type: SEND_MESSAGE});
export const updateMessageAction = (newText) => ({type: UPDATE_MESSAGE_TEXT, newText});