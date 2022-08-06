export default {
    name: 'sale',
    type: 'document',
    title: 'Sale',
    fields: [
        {
            title: 'Client name',
            name: 'client_name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Seller',
            name: 'seller',
            type: 'reference',
            to: [{type: 'user'} || {type:'userFirebase'}],
            validation: Rule => Rule.required()
        },
        {
            title: 'Product',
            name: 'product',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'value',
            name: 'value',
            type: 'number',
            validation: Rule => Rule.required()
        },
        {
            title: 'Date',
            name: 'date',
            type: 'datetime',
            validation: Rule => Rule.required()
        },
        {
            title: 'Status',
            name: 'status',
            type: 'boolean',
        },
        {
            title: 'Comission',
            name: 'comission',
            type: 'number',  
        }
    ]
}