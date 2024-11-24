import React from 'react'
import { ProductService } from '../../services/product-service'

async function ProductDetail(props: any) {
    console.log('print props', props)

    //reading params from url
    const prodId = props.params.productId;//productId is file name [productId] for receiving dynamic value
    var productsDetail;
    if (prodId) {
        productsDetail = await ProductService.getProductsById(prodId);
    }
    console.log('print props', props)
    return (
        <div>
            Product Detail: {prodId}
            {/* <h1>{productsDetail.name}</h1> */}

        </div>
    )
}

export default ProductDetail;