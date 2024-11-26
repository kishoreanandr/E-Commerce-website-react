import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom";
import { BreadCums } from "../Components/Breadcums/BreadCums";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { DescriptionBox } from "../Components/Description/DescriptionBox";
import { RelatedProducts } from "../Components/Related Products/RelatedProducts";

export const Product=()=>{
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product=all_product.find((e)=>e.id===Number(productId));
    return <>
        <div className="Product">
            <BreadCums product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    </>
}