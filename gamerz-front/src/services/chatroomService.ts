import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const createChatroom = async (data: any) => {
    try {
        const {title, description} = data
        await axios.post(`${API}/new-chatroom`, 
            {title, description}, { withCredentials: true })
        
    } catch (e: any) {
        console.log(e.message)
    }
}

export const getAllChatrooms = async () => {
    try {
        const response = await axios.get(`${API}/chatrooms`, { withCredentials: true })
        return response.data.chatrooms
        
    } catch (e: any ) {
        console.log(e.message)
        throw new Error("Problème avec la connexion au back")
        
    }
}

export const getMessagesOfChatroom = async(id: any) => {
    try {
        const response = await axios.get(`${API}/chatrooms/${id}`, { withCredentials: true })
        return response.data.messages
    } catch(e: any) {
        console.log(e.message)
    }
}

export const addMemberInChatroom = async (idChatroom: string, idMember: string)=> {
    try {
        const response = await axios.patch(`${API}/chatrooms/${idChatroom}`, {
            id: idMember, 
        }, { withCredentials: true });
        console.log(response.data)
        return response.data
        
    } catch(e: any) {
        console.log(e.message)
    }
}
