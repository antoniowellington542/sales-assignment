export const createUserMutation = (data)=> {

    const query = {
        _type: 'user',
        name: data.name,
        role: data.role,
        email: data.email,
        password: data.password,
        admin: false
    }


    return query;
}