export const findUserMutation = (email)=> {

    const query = `*[_type=="user" && email=="${email}"]{
        _id,
        name,           
    }`

    return query;
}

