import React            from "react"
import Loader           from "../components/Loader"
import {useParams}      from "react-router-dom"
import {useAxiosGet}    from "../Hooks/HttpRequests";



function Product(){
    const {id}   =  useParams()
    const  url   = `https://5fc585614931580016e3be02.mockapi.io/appname/api/product/${id}`

    let content  = null
    let product  = useAxiosGet(url)

    if(product.error){
        content = <p className="pt-4 justify-center">
            There was an Error, please Refresh or try an API ID less than 50
        </p>
    }
    if(product.loading){
        content = <Loader></Loader>
    }
    
    if(product.data){
        return(
            content = 
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img 
                    src={product.data.images} 
                    alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    ${product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
        ) 
    } 

    return(
        <div>
          {content}
        </div>
        
    )  
} 

export default Product
