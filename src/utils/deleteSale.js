import { client } from "./client"
import Router from 'next/router';

export const deleteSale = async (id) => {
    client
        .delete(id)
        .then( ()=> Router.replace("/sales"))
        .catch(console.error)

}