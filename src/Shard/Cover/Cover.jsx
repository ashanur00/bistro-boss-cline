import { Parallax } from 'react-parallax';

const Cover = ({ img, title, description }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div>
                <div className="hero h-[570px] mb-10">
                    <div className=""></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className=" w-[1096px] bg-[#1515158a] p-20">
                            <h1 className="mb-5 text-5xl text-white font-cinzel uppercase">{title}</h1>
                            <p className="mb-5 text-white">{description}</p>

                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;