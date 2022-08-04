export const deleteSaleMutation = (id)=> {
    const mutations = [{
        delete: {
            _type: 'sale',
            _id: id
        }
    }]

    return mutations;
}