const Card = ({product, client_name, value}) => {
    console.log(product);
    return(
        <div className="w-24 h-48 rounded-xl flex bg-white flex-col border border-gray-400 cursor-pointer">
            <div className="h-full flex justify-center items-center ">
                <h2 className="text-2xl font-bold" style={{textTransform:'capitalize'}}>{product}</h2>
            </div>
            <div className="w-full p-3 rounded-xl bg-green-400 flex flex-col justify-between">
                <div className="flex justify-between">
                    <h2 className="text-lg font-medium" style={{color: "#112230"}}>Client</h2>
                    <p className="text-xl font-light" style={{color: "#ffffff", textTransform:'capitalize'}}>{client_name}</p>
                </div>
                <div className="flex justify-between">
                    <h2 className="text-lg font-medium" style={{color: "#112230"}}>Value</h2>
                    <p className="text-xl font-light" style={{color: "#ffffff"}}>{value} R$</p>
                </div>
            </div> 
        </div>
    )
}

export default Card;