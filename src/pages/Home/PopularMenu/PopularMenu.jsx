import SectionTitel from "../../../Components/SectionTitel/SectionTitel";
import MenuItem from "../../../Shard/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    
    return (
        <section>
            <SectionTitel
            subHeading='---Check it out--- '
            heading='FROM OUR MENU'
            />
            <div className="grid md:grid-cols-2 gap-5">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}/>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 ml-[570px] mb-10">View Full  Menu</button>
        </section>
    );
};

export default PopularMenu;