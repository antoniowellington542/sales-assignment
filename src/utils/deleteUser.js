import { client } from "./client"
import Router from 'next/router';

export const deleteSale = async (_id) => {
    client
        .delete(_id)
        .then( ()=> Router.replace("/sales"))
        .catch(console.error)
}