import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user'
import sale from './sale'
import userFirebase from './userFirebase'
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    user,
    sale,
    userFirebase,
  ]),
})
