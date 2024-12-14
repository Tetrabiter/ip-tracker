import { useEffect, useState } from "react";

const Info = () => {
    const [address , setAddress] = useState(null);
    const [location, setLocation] = useState(null);
    const [timezone , setTimezone] = useState(null);
    const [isp , setIsp] = useState(null);

    useEffect(() => {
        fetch("http://ip-api.com/json/24.48.0.1")
        .then(response => response.json())
        .then(data => {
            setAddress(data.query);
            setLocation(data.region);
            setTimezone(data.timezone);
            setIsp(data.isp);
        })
        .catch(error => console.error("Ошибка при получении данных:", error));
    })


    return (
        <div className="w-5/6 h-40 flex justify-center items-center gap-8 bg-white rounded-xl">
            <div className="">
                <p className="font-bold tracking-widest text-gray-400">IP ADDRESS</p>
                <p className="text-4xl font-semibold">{address}</p>
            </div>
            <div className="border-l-2 h-14 mx-4" />
            <div className="">
                <p className="font-bold tracking-widest text-gray-400">LOCATION</p>
                <p className="text-4xl font-semibold">{location}</p>
            </div>
            <div className="border-l-2 h-14 mx-4" />
            <div className="">
                <p className="font-bold tracking-widest text-gray-400">TIMEZONE</p>
                <p className="text-4xl font-semibold">{timezone}</p>
            </div>
            <div className="border-l-2 h-14 mx-4" />
            <div className="">
                <p className="font-bold tracking-widest text-gray-400">ISP</p>
                <p className="text-4xl font-semibold">{isp}</p>
            </div>
        </div>
    );
}

export default Info;


//commen