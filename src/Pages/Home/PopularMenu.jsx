import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    console.log(menu)
    useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularMenus = data.filter(menu => menu.category === 'popular')
            setMenu(popularMenus)
        })
    },[])
    return (
        <div className="mb-12">
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'---Check it out---'}/>
        
        <div className="grid md:grid-cols-2 gap-12">
            {
                menu.map(item => <MenuItem key={item._id} item={item}/>)
            }
        </div>
        </div>
    );
};

export default PopularMenu;