interface IPrams {
    productId?: string;

}

const Product = ({params} : { params: IPrams }) => {
    console.log('params',  params);
    
    return ( <div>products</div> );
}
 
export default Product;