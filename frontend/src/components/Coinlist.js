import React, { useState, useEffect } from "react";
import coinGecko from "../api/coinGecko.js"

export const CoinList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [coins, setCoins] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const res = await coinGecko.get("/coins/markets", {
            params: {
                vs_currency: "usd",
                
                }
            });
            console.log(res.data)
            setCoins(res.data);
            setIsLoading(false);
        };
        fetchData();

    });



    const renderCoins = () => {
        /* if(isLoading) {
            return <div>Loading...</div>
        }

        return(
            <div>
                {coins.map()}
            </div>
        ); */
    };

    return(
        <div>
            {renderCoins()}
        </div>
    );
};

export default CoinList;