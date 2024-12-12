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
        <div className="w-5/6 h-32 flex justify-center items-center gap-8">
            <div className="">
                <p className="font-semibold text-gray-500">IP ADDRESS</p>
                <p className="">{address}</p>
            </div>
            <div className="border-l-2 h-14" />
            <div className="">
                <p className="font-semibold text-gray-500">LOCATION</p>
                <p className="">{location}</p>
            </div>
            <div className="border-l-2 h-14" />
            <div className="">
                <p className="font-semibold text-gray-500">TIMEZONE</p>
                <p className="">{timezone}</p>
            </div>
            <div className="border-l-2 h-14" />
            <div className="">
                <p className="font-semibold text-gray-500">ISP</p>
                <p className="">{isp}</p>
            </div>
        </div>
    );
}

export default Info;