import { Link } from "react-router-dom";
import Cover from "../../../Shard/Cover/Cover";
import MenuItem from "../../../Shard/MenuItem/MenuItem";


const MenuCategory = ({ items, img, title, description }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title} description={description} />}
            <div className="grid md:grid-cols-2 gap-5 mt-16">
                {
                    items.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <Link to={`/shop/${title}`}>
                <button className="btn btn-outline bg-slate-100 border-0 border-b-4 ml-[510px] mb-10">ORDER YOUR FAVOURITE FOOD</button>

            </Link>
        </div>
    );
};

export default MenuCategory;