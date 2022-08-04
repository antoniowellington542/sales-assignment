export const createUser = (name, role)=> {
    const mutations = [{
        createOrReplace: {
            _type: 'user',
            name: name,
            role: role,
            admin: false,
        }
    }]

    return mutations;
}