import React from "react";
import { useEffect, useState } from "react";

function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users/TaarakGada")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);
    return (
        <div className="flex justify-center items-start bg-white m-3 rounded-md">
            <div className=" text-center m-3 font-semibold backdrop-blur-sm bg-black/30 p-5 text-2xl rounded-md  justify-center items-center w-auto">
                Github Followers : {data.followers}
                <img
                    src={data.avatar_url}
                    alt=""
                    className=" rounded-md mx-auto my-3"
                />
            </div>
        </div>
    );
}

export default Github;
