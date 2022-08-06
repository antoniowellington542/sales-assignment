export const findUserMutation = (email)=> {

    const query = `*[_type=="user" && email=="${email}"]{
        _id,          
    }`;

    return query;
}

