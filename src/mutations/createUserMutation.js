export const createUser = (data)=> {

    const password = "";
    if(data.password){
        password = data.password;
    }

    const role = "";
    if(data.role){
        role = data.role;
    }

    const authUserId = "";

    if(data.uid){
        authUserId = data.uid;
        const mutations_google = [{
            create: {
                _type: 'user',
                authUserId: authUserId,
                name: data.name,
                email: data.email,
                admin: false,
            }
        }]
        
        return mutations_google;
    }

    const mutations = [{
        createOrReplace: {
            _type: 'user',
            name: data.name,
            role: role,
            email: data.email,
            password: password,
            admin: false,
        }
    }]


    return mutations;
}