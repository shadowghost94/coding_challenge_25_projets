import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchProducts() {
        try {
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${
                    count === 0 ? 0 : count * 20
                }`
            );

            const result = await response.json();

            if (result && result.products && result.products.length) {
                setProducts((prevData) => {
                    const newProducts = result.products.filter(
                        (newProduct) =>
                            !prevData.some(
                                (existingProduct) =>
                                    existingProduct.id === newProduct.id
                            )
                    );
                    return [...prevData, ...newProducts];
                });
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        if (products && products.length === 100) {
            setDisableButton(true);
        }
    }, [products]);

    if (loading) {
        return <div>Loading data ! Please wait.</div>;
    }

    return (
        <div className="load-more-container">
            <div className="product-container">
                {products && products.length
                    ? products.map((item) => (
                          <div key={item.id} className="product">
                              <img src={item.thumbnail} alt={item.title} />
                              <p>{item.title}</p>
                          </div>
                      ))
                    : null}
            </div>
            <div className="button-container">
                <button
                    disabled={disableButton}
                    onClick={() => setCount(count + 1)}
                >
                    Load More Products
                </button>
                {disableButton ? (
                    <p>Vous avez atteints les 100 produits</p>
                ) : null}
            </div>
        </div>
    );
}
