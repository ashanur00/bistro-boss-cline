
const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item
    return (
        <div className="flex w-[648px] mb-10 ml-10">
           <img style={{borderRadius: '0 200px 200px 200px'}} src={image} className="w-[104px]" alt="" />
           <div className="mt-3 ml-3">
           <div className="flex justify-items-end">
                <h2 className="font-cinzel text-xl">{name} --------------</h2>
                <p className="ml-[100px] text-[#BB8506]">${price}</p>
            </div>
            <p className="w-[443px]">{recipe}</p>
           </div>
        </div>
    );
};

export default MenuItem;