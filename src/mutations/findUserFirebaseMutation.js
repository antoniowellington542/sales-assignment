export const findUserFirebaseMutation = (email)=> {

    const query = `*[_type=="userFirebase" && email=="${email}"]{
        _id,
        name,           
    }`

    return query;
}

