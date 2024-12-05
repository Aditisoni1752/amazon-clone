import { useSelector } from "react-redux";
import HomeItems from "./HomeItems";

const Home = () => {
    const items = useSelector(store => store.item); // Update based on your store setup;

    return (
        <>
            <div className="Ccontainer">
                {Array.isArray(items) && items.map((item) => (
                    <HomeItems key={item.id} item={item} />
                ))}
            </div>
        </>
    );
};

export default Home;
