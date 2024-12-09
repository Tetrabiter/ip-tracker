import { IoIosArrowForward } from "react-icons/io";

const SearchInput = () => {
    return (
        <div className="w-[30%] h-16 flex items-center justify-center">
            <input
                type="text"
                className="w-11/12 h-16 rounded-l-lg"
                placeholder="Search for any IP address or domain"
            />
            <button className="bg-black text-white rounded-r-lg h-16 w-10 flex justify-center items-center hover:bg-gray-700 active:bg-gray-700 duration-200">
                <IoIosArrowForward />
            </button>
        </div>
    )
}

export default SearchInput;