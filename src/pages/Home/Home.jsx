import Banner from "../../Components/Banner/Banner";
import Banner2 from "../../Components/Banner/Banner2";
import Banner3 from "../../Components/Banner/Banner3";
import Footer from "../../Shard/Footer/Footer";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Banner2/>
           <Banner3/>
           <PopularMenu/>
           <Featured/>
           <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;