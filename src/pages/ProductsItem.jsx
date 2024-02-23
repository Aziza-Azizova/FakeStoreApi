import { Link, useLocation, useParams } from "react-router-dom"
import getApi from "../hooks/getApi";
import Preloader from "../components/Preloader";

function ProductsItem() {
    const path = useLocation().pathname;
    const { data: product, loading } = getApi(`${path}`);
    if (loading) return <Preloader />

    return (
        <div className="product__item">
            <img src={product.image} alt="" className="product__item-img" />
            <div className="product__item-info">
                <div className="product__item-top">
                    <h3 className="product__item-name">Name: {product.title}</h3>
                    <p className="product__item-category"><strong>Category:</strong> {product.category}</p>
                </div>
                <div className="product__item-text"><strong>Description:</strong>  {product.description}</div>
                <div className="product__item-bottom">
                    <span className="product__item-price"><strong>Price:</strong> ${product.price}</span>
                    <span className="product__item-rate"><strong>Rate:</strong> {product.rating.rate}</span>
                </div>
                <Link className="product__item-btn" to="/products">Back to products</Link>
            </div>
        </div>
    )
}

export default ProductsItem