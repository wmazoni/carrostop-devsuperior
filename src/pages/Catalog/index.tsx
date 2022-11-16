import ProductCard from "components/ProductCard";
import ProductSearch from "components/ProductSearch";

const Catalog = () => {
    return (
        <div className="container my-4">
            <div>
                <ProductSearch />
            </div>
            <div className="row card-container">
                <div className="col-sm-6 col-lg-4 col-xl-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-4">
                    <ProductCard />
                </div>
            </div>
        </div>
    );
}

export default Catalog