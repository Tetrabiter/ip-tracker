

const Info = () => {
    return (
        <div className="w-5/6 h-32 flex justify-center items-center gap-8">
            <div className="">
                <p className="font-semibold text-gray-500">IP ADDRESS</p>
                <p className=""></p>
            </div>
            <div className="border-l-2 h-14"/>
            <div className="">
                <p className="font-semibold text-gray-500">LOCATION</p>
                <p className=""></p>
            </div>
            <div className="border-l-2 h-14"/>
            <div className="">
                <p className="font-semibold text-gray-500">TIMEZONE</p>
                <p className=""></p>
            </div>
            <div className="border-l-2 h-14"/>
            <div className="">
                <p className="font-semibold text-gray-500">ISP</p>
                <p className=""></p>
            </div>
        </div>
    );
}

export default Info;