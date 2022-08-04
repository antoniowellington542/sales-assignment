export const redirectLoginPage = (window, signed, router) => {


    if(typeof window !== "undefined"){
        if(!signed){
            router.replace("/");
        }
    }
};

