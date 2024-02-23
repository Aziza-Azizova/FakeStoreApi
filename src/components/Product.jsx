import { Link } from "react-router-dom"

function Product({ product }) {
    return (
        <div className="products__item">
            <img src={product.image} alt="" className="products__img" />
            <h3 className="products__name">{product.title}</h3>
            <p className="products__description">{product.description}</p>
            <div className="products__info">
                <span className="product__price">Price: ${product.price}</span>
                <Link to={`${product.id}`}>More</Link>
            </div>
        </div>
    )
}

export default Product