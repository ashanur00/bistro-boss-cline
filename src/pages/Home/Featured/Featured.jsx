import SectionTitel from "../../../Components/SectionTitel/SectionTitel";
import img from "../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div className="">

            <div className="hero  bg-fixed py-20 mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/0DRwj71/Rectangle-13.png)' }}>
                <div className="">
                   <div className="-ml-32 text-white">
                   <SectionTitel subHeading='---Check it out---' heading="FROM OUR MENU" />
                   </div>
                    <div className="md:flex justify-center items-center py-8 px-16">
                        <div>
                            <img src={img} className="w-[400px]" alt="" />
                        </div>
                        <div className="ml-16 w-[400px] text-white">
                            <h2 className="font-cinzel text-xl">March 20, 2023</h2>
                            <h2 className="font-cinzel text-xl">WHERE CAN I GET SOME?</h2>
                            <p>
                                From our menu, enjoy truffle fries, grilled salmon with lemon-dill sauce, and slow-cooked beef bourguignon.
                                Each dish reflects our dedication to quality and flavor.</p>
                            <div className="mt-10">
                                <button className="btn btn-outline border-0 border-b-4 text-white">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>










            {/* <SectionTitel subHeading='---Check it out---' heading="FROM OUR MENU" />
            <div className="md:flex justify-center items-center py-8 px-16">
                <div>
                    <img src={img} className="w-[400px]" alt="" />
                </div>
                <div className="ml-16 w-[400px]">
                    <h2 className="font-cinzel text-xl">March 20, 2023</h2>
                    <h2 className="font-cinzel text-xl">WHERE CAN I GET SOME?</h2>
                    <p>
                        From our menu, enjoy truffle fries, grilled salmon with lemon-dill sauce, and slow-cooked beef bourguignon.
                        Each dish reflects our dedication to quality and flavor.</p>
                    <div className="mt-10">
                        <button className="btn border-b-2 border-white text-white">Read More</button>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Featured;