import { Helmet } from "react-helmet-async";
import Footer from "../../Shard/Footer/Footer";
import menuimg from "../../assets/menu/banner3.jpg"
import menuimg2 from "../../assets/menu/dessert-bg.jpeg"
import menuimg3 from "../../assets/menu/pizza-bg.jpg"
import menuimg4 from "../../assets/menu/salad-bg.jpg"
import menuimg5 from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../Hooks/useMenu";
import SectionTitel from "../../Components/SectionTitel/SectionTitel";
import MenuCategory from "./MenuCategory/MenuCategory";
import Cover from "../../Shard/Cover/Cover";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            {/* offered */}
            <Cover img={menuimg} title="OUR MENU" description="Would you like to try a dish?"/>
            <SectionTitel heading="TODAY'S OFFER" subHeading="---Don't miss---"/>
            <MenuCategory 
            items={offered}
            />
            {/* dessert menu item  */}
            
            <MenuCategory 
            items={dessert}
            img={menuimg2}
            title="dessert"
            description="Rich, creamy desserts like chocolate mousse and tiramisu tantalize taste buds, offering sweet indulgence and moments of pure culinary delight."
            />
            <MenuCategory 
            items={pizza}
            img={menuimg3}
            title="pizza"
            description="Hot, cheesy pizza with a crispy crust, topped with fresh ingredients and savory sauce, offers a perfect slice of comfort food."
            />
            <MenuCategory 
            items={salad}
            img={menuimg4}
            title="salad"
            description="A fresh, crisp salad with mixed greens, colorful veggies, and a zesty dressing provides a healthy, delicious, and refreshing meal option."
            />
            <MenuCategory 
            items={soup}
            img={menuimg5}
            title="soup"
            description="Warm, hearty soup, rich with flavors and nutritious ingredients, provides comfort and nourishment, perfect for any time of year."
            />
            <Footer />
        </div>
    );
};

export default Menu;