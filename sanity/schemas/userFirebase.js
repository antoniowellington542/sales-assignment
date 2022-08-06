export default {
    name: 'userFirebase',
    type: 'document',
    title: 'UserFirebase',
    fields: [
        {
            title: 'AuthUseId',
            name: 'authUserId',
            type: 'string',
        },
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