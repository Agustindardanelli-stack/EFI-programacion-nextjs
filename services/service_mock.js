// async function login(email, password) {
//     return { user: { name: email }, accessToken: '123456789', password: password }
// }

import validUsersMock from '../mocks/mock_user';
import validMateriasMock from '../mocks/mock_materias';

async function login(email, password) {
    try {
        if (validUsersMock.find(user => user.email === email && user.password === password)) {
            return true;
        } else {
            return false
        }
    } catch(e){
        console.log(e);
    }
}

async function materias() {

    try {
        return validMateriasMock;
    } catch(e) {
        console.log(e)
    }
}

export const serviceMock = {
    login,
    materias
}