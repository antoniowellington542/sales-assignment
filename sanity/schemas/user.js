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
            title: 'Role',
            name: 'role',
            type: 'string'
        },
    ]
}