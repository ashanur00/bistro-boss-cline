

const SectionTitel = ({heading, subHeading}) => {
    return (
        <div className="md:ml-[430px] font-cinzel text-center md:w-[424px]">
            <p className="text-[#D99904] mb-3 mt-10">{subHeading}</p>
            
            <h3 className="text-2xl mb-10 border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitel;