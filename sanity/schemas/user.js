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
        },
        {
            title: 'Role',
            name: 'role',
            type: 'string',
        },
        {
            title:'Admin',
            name: 'admin',
            type: 'boolean'
        }
    ]
}