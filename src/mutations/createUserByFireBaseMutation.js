export const createUserByFireBaseMutation = (data)=> {
    const query = {
        _type: 'userFirebase',
        authUserId: data.uid,
        name: data.displayName,
        email: data.email,
        role: 'seller',
        admin: false,
    }  
    return query;
};
