import React                             from "react"
import Loader                            from "../components/Loader"
import ProductCard                       from "../components/ProductCard"
import {useAxiosGet}                     from "../Hooks/HttpRequests"

function Home(){
    const  url = `https://5fc585614931580016e3be02.mockapi.io/appname/api/product?page=1&limit=10`

    let products = useAxiosGet(url)
    let content  = null
    

    if(products.error){
        content = <p className="pt-4 justify-center">
            There was an Error, please Refresh or try an API ID less than 50
                </p>
    }
    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.data){
        return(
            content = 
            products.data.map((product, key) => 
              <div key={product.id} >
                <ProductCard
                    product = {product}
                />
              </div>
            )
        ) 
    }

    return(
        <div>
            <h1 className="font-bold text-2xl">
              Best Sellers
            </h1>
            {content}
        </div>
    )
}

export default Home