export default {
    name: 'sale',
    type: 'document',
    title: 'Sale',
    fields: [
        {
            title: 'Client name',
            name: 'client_name',
            type: 'string',
            required: 'true'
        },
        {
            title: 'Seller',
            name: 'seller',
            type: 'reference',
            to: [{type: 'user'}],
            required: 'true'
        },
        {
            title: 'Product',
            name: 'product',
            type: 'string',
            required: 'true'
        },
        {
            title: 'value',
            name: 'value',
            type: 'number',
            required: 'true'
        },
        {
            title: 'Date',
            name: 'date',
            type: 'datetime',
            required: 'true'
        },
        {
            title: 'Status',
            name: 'status',
            type: 'string',
            required: 'false'
        },
        {
            title: 'Comission',
            name: 'comission',
            type: 'number',
            required: 'false'
        }
    ]
}