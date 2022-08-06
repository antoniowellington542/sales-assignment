export const findUserMutation = (email)=> {

    const query = `*[_type=="user" && email=="${email}"]{
        _id,
        name,
        email,
        password,
        role        
    }`;

    return query;
}

