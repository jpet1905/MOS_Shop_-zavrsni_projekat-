import { Link } from "react-router-dom";
import { StyledProduct } from "../StyledComponents/StyledProduct"
import { StyledButton } from "../StyledComponents/StyledLink"


const Product = ({ product }) => {
    
    return (
        <StyledProduct>
            <img src={product.avatar} alt={`${product.productName}`} />
            <StyledButton className="name_box">
                <Link className="product_link" to={`products/${product.id}`}><b>{product.productName}</b></Link>
            </StyledButton>
        </StyledProduct>
    );
}

export default Product;