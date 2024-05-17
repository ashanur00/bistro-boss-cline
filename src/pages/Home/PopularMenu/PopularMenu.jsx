import { useEffect, useState } from "react";
import SectionTitel from "../../../Components/SectionTitel/SectionTitel";
import MenuItem from "../../../Shard/MenuItem/MenuItem";

<section></section>

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const puplarItems = data.filter(item => item.category === 'popular')
            setMenu(puplarItems)})
    },[])

    return (
        <section>
            <SectionTitel
            subHeading='---Check it out--- '
            heading='FROM OUR MENU'
            />
            <div className="grid md:grid-cols-2 gap-5">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}/>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 ml-[570px] mb-10">View Full  Menu</button>
        </section>
    );
};

export default PopularMenu;