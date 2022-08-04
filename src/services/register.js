import config from "../utils/config";

export async function registerUser(mutations){
    return await fetch(`https://${config.projectId}.api.sanity.io/v2021-06-07/data/mutate/${config.dataset}`, {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${config.tokenWithWriteAndRead}`
        },
        body: JSON.stringify({mutations})
    })
        .then(response => response.json())
        .then(result => console.log("ok"))
        .catch(error => console.error(error))
};