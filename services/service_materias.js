import { serviceMock } from "./service_mock"

const getMaterias = async () => {
    const data = await serviceMock.materias()
    return data
}

export const serviceMaterias = {
    getMaterias
}