import Moment from 'moment';

export const createSaleMutation = (client_name, product, value, _id)=> {
    const query = {
        _type: 'sale',
        client_name: client_name,
        seller: {_ref: _id},
        product: product,
        value: value,
        comission: 0,
        status: false,
        date: Moment().format('YYYY-MM-DD')
    }

    return query;
}
