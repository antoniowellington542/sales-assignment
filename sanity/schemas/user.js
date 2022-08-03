export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        {
            title: 'AuthUserId',
            name: 'authUserId',
            type: 'string'
        },
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            required: true,
        },
        {
            title: 'Role',
            name: 'role',
            type: 'string',
        },
    ]
}