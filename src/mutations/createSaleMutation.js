import Moment from 'moment';

export const createSaleMutation = ({client_name, product, value, _id})=> {
    const mutations = [{
        createOrReplace: {
            _type: 'sale',
            client_name: client_name,
            seller: {_ref: _id},
            product: product,
            value: value,
            date: Moment().format('YYYY-MM-DD h:mm')
        }
    }]

    return mutations;
}