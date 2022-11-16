
const Offer = (offers)=>{
   

    return(
        <div className="d-flex  justify-content-around w-75 shadow m-5 text-white ">

                <div className="d-flex  justify-content-center">
                    <ul >
                    {                    
                        offers.offers.map((offer,i)=>{
                            return <li key={i}> {offer} </li>

                        })
                    }
                        
                    </ul>
            
            </div>

        </div>
    )

}

export default Offer;