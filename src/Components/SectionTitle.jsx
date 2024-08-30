

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center flex justify-center flex-col items-center my-8">
            <h2 className="text-yellow-700 mb-2">{subHeading}</h2>
           
            <h1 className="text-3xl uppercase border-y-4 py-4">{heading}</h1>
            
        </div>
    );
};

export default SectionTitle;