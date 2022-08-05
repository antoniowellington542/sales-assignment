import { client } from "./client";

const query = (id) => {
    const r = `*[_type=="sale" && _id=="${id}"]`;
    return r;
}

export const deleteDataSale = async (id) =>{
        await client
            .delete({query: `*[_type=="sale" && _id=="${id}"]`})
            .then(console.log)
            .catch(console.log)
};