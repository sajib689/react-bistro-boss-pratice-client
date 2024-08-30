

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center">
            <h2 className="text-yellow-700">{subHeading}</h2>
            <h1>{heading}</h1>
            
        </div>
    );
};

export default SectionTitle;