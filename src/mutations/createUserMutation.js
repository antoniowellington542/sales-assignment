export const createUserMutation = (authUserId, name, email, role, password)=> {

    const query = {
        _type: 'user',
        authUserId: authUserId,
        name: name,
        role: role,
        email: email,
        password: password,
    }


    return query;
}