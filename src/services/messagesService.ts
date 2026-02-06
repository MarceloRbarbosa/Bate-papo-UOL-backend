import messagesRepository from "../repositories/messagesRepository";

type CreateMessageInput = {
    userId: number,
    to: string
    text: string
    type: "message" | "private_message";
};

async function createMessage({userId, to, text, type}:CreateMessageInput) {
    if(!text || text.trim().length === 0) { throw { type: "bad_request", message:"text is required"}}
    if (type === "private_message" && (!to || to === "Todos")) { throw { type: "bad_request", message:"A valid recipient is required for private messages."}}

    const finalTo = to?.trim() || "Todos"

    return messagesRepository.createMessage(userId, finalTo, text.trim(), type);
}

async function listMessages(){
    return messagesRepository.listMessages(80);
}

const messagesService = { createMessage, listMessages}

export default messagesService;