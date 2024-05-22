

const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="">
                    <img src={image} alt="Food" className="" />
                </figure>
                <p className="bg-slate-900 rounded-md text-white absolute p-3 mt-4 mr-4 right-0">${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-4 text-[#BB8506]">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;