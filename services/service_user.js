import { serviceMock } from "./service_mock"

const validUsers = async (email, password) => {
    const data = await serviceMock.login(email, password)
    if (data){
        return data
    } else {
        return null;
    }
}

export const serviceUser = {
    validUsers,
}