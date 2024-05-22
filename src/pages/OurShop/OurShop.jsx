import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

import Cover from "../../Shard/Cover/Cover";
import Footer from "../../Shard/Footer/Footer";
import coverImg from "../../assets/shop/banner2.jpg"
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import ShopTab from "./ShopTab/ShopTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const OurShop = () => {
    const categories = ['salad', 'pizza',  'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop</title>
            </Helmet>
            <Cover img={coverImg} title="OUR SHOP" description='Would you like to try a dish?' />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                   <ShopTab items={salad}/>
                </TabPanel>
                <TabPanel>
                <ShopTab items={pizza}/>
                </TabPanel>
                <TabPanel>
                <ShopTab items={soup}/>
                </TabPanel>
                <TabPanel>
                <ShopTab items={dessert}/>
                </TabPanel>
                <TabPanel>
                <ShopTab items={drinks}/>
                </TabPanel>
            </Tabs>
            <Footer />
        </div>
    );
};

export default OurShop;