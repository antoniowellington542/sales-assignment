export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Email',
            name: 'email',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Password',
            name: 'password',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Role',
            name: 'role',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title:'Admin',
            name: 'admin',
            type: 'boolean'
        }
    ]
}