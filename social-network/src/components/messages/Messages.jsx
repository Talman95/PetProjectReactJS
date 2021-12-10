import MessagesItem from './messagesItem/MessagesItem';


const Messages = (props) => {
    const messagesData = [
        { id: 0, name: 'Ivan', message: 'Hi, friend' },
        { id: 1, name: 'Nikolay', message: 'Hi, friend' },
        { id: 2, name: 'Valerii', message: 'Hi, friend' },
        { id: 3, name: 'Anna', message: 'Hi, friend' }
    ]

    return (
        <div>
            {messagesData.map(mes => <MessagesItem key={mes.id} id={mes.id} name={mes.name} message={mes.message} />)}
        </div>
    )
}

export default Messages;