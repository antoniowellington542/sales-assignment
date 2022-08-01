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
            title: 'Admin',
            name: 'admin',
            type: 'boolean'
        },
    ]
}