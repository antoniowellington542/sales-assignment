export const createUser = (name, email, role, password)=> {
    const mutations = [{
        createOrReplace: {
            _type: 'user',
            name: name,
            role: role,
            email: email,
            password: password,
            admin: false,
        }
    }]

    return mutations;
}