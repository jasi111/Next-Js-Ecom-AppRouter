import { ProductService } from "../../services/product-service";
import Link from 'next/link'
import './productDetail.css'
export default async function ProductDetail({ params }: { params: { documentId: string } }) {
  try {
    // Destructure `documentId` from awaited `params`
    const { documentId: prodId } = await params; // Ensure params are awaited

    // Fetch product details using the product ID
    const productDetail = await ProductService.getProductsById(prodId);

    if (!productDetail) {
      return <p>Product not found!</p>;
    }

    return (
      <div>
      <div>
          <div className="d-flex justify-content-around mt-4 ">
              <div className="border w-50 p-5 d-flex justify-content-center align-items-center ">
                  {productDetail?.image ? (
                      <img src={productDetail.image} alt='' height={300} width={300} className="object-fit-contain" />
                  ) : (
                      <p>Loading image...</p>
                  )}
              </div>
              <div className="w-50 border ">
                  <h3 className="mt-5 mb-3 ms-3">{productDetail.title}</h3>


                  <p className="p-3 fw-semibold text-capitalize lh-lg" style={{ textAlign: "justify" }}>
                      {productDetail.description}
                  </p>
                  <h4 className='ms-3'>Price: ${productDetail.price}</h4>

                  <div className=''>
                      <a href="" className="text-nowrap  ms-3 text-decoration-none">
                          <i
                              className="bi bi-star-fill text-warning"
                              style={{ fontSize: "1.1rem" }}
                          ></i>
                          <i
                              className="bi bi-star-fill text-warning"
                              style={{ fontSize: "1.1rem" }}
                          ></i>
                          <i
                              className="bi bi-star-fill text-warning"
                              style={{ fontSize: "1.1rem" }}
                          ></i>
                          <i
                              className="bi bi-star-fill text-warning"
                              style={{ fontSize: "1.1rem" }}
                          ></i>
                          <i
                              className="bi bi-star-fill text-warning"
                              style={{ fontSize: "1.1rem" }}
                          ></i>
                      </a>
                  </div>

                  <Link
                      className="btn ms-3 bg-green text-light mt-5 px-4 mb-5"
                      href='/cart'>
                      Add to Cart
                  </Link>

                  <Link
                      href='/cart'
                      className="btn bg-green text-light ms-5 mt-5 mb-5 px-4"
                  >
                      Buy Now
                  </Link>
              </div>
          </div>


      </div>
  </div>
    );
  } catch (error) {
    console.error("Error fetching product details:", error);
    return <p>Something went wrong. Please try again later.</p>;
  }
}
