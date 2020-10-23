import React, { useContext, Fragment, useEffect } from "react";
import ProductList from "../components/ProductList";

import GlobalContext from "../GlobalContext";

export const Home = (props) => {
    const { products, getProducts } = useContext(GlobalContext);
    
    useEffect(() => {
        getProducts();
    }, [getProducts]);

        return (
            <Fragment>
                <ProductList products={products}></ProductList>
            </Fragment>
        );

}

export default Home;