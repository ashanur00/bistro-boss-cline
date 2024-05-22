import FoodCard from "../../../Components/FoodCard/FoodCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";






const ShopTab = ({ items }) => {
    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //         return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     },
    // };
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    items.map(item => <FoodCard key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default ShopTab;