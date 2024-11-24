import React from 'react'
import { ProductService } from '../../services/product-service'

export default async function ProductDetail(props: any) {
    console.log('props', props)
    const prodId = props.params.documentId;
    var productsDetail;
    if (prodId) {
        productsDetail = await ProductService.getProductsById(prodId);
    }
    // console.log('productIDProduct',product.data) 
    console.log('productID', productsDetail)
    console.log('productID', prodId)
    console.log('productname', productsDetail.data.name)

    return (
        <div>

            Product Detail:{prodId}
            <h1>{productsDetail.name}</h1>

        </div>
    )
}
