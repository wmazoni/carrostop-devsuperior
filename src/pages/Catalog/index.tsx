import ProductCard from "components/ProductCard";

const Catalog = () => {
    return (
        <div className="container my-4">
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