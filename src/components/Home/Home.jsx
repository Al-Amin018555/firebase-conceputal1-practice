import { createContext, useState } from "react";

export const HomeContext = createContext();

const Home = (data) => {
    console.log(data)

    const [homeData, setHomeData] = useState("from home");
    return (
        <div className="flex justify-center items-center min-h-screen">
            <HomeContext.Provider value={homeData}>
                {
                    data.children
                }
            </HomeContext.Provider>

        </div>
    );
};

export default Home;