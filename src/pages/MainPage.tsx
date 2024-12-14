import SearchInput from "../components/Search"
import Topic from "../components/Topic";
import Info from "../components/Info";


const MainPage = () =>{
    return(
        <div className="w-full h-screen">
            <div className="w-full h-1/3 -z-10 bg-desktop bg-no-repeat bg-cover absolute"/>
            <div className="z-10 flex flex-col justify-start items-center gap-6 pt-[3%]">
                <Topic />
                <SearchInput />
                <Info />
            </div>
        </div>
    )
}
 
export default MainPage;