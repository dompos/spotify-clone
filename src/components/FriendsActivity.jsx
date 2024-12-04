import { FaUserPlus, FaXmark } from "react-icons/fa6"
import FriendActivity from "./FriendActivity"

const FriendsActivity = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center text-gray-400 text-sm">
                <h1 className="text-white font-bold">Attività amici</h1>
                <div className="flex gap-1">
                    <FaUserPlus />
                    <FaXmark />
                </div>
            </div>
            <FriendActivity name='Charlie Hookman' track='In Camera' artist='Yumi Zouma' album='EP III' hours='4' />
            <FriendActivity name='lightdark02' track='Aimed to Kill' artist='Jade LeMac' album='Aimed to Kill' hours='8' />
            <FriendActivity name='Valeria Traverso' track='New Kings' artist='Sleeping Wolf' album='Twint Badass mood' hours='3' />
        </div>
    )
}

export default FriendsActivity