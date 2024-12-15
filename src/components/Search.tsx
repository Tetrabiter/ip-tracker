import { IoIosArrowForward } from "react-icons/io";

const SearchInput = () => {
    return (
        <div className="w-[30%] h-16 flex items-center justify-center pt-[2%] pb-[4%]">
            <form className="flex w-full" action="">
                <input
                    type="text"
                    className="w-11/12 h-16 rounded-l-xl p-5"
                    placeholder="Search for any IP address or domain"
                />
                <button type="submit" className="bg-black text-white rounded-r-xl h-16 w-12 flex justify-center items-center hover:bg-gray-700 active:bg-gray-700 duration-200">
                    <IoIosArrowForward />
                </button>
            </form>
        </div>
    )
}

export default SearchInput;