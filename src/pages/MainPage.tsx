import SearchInput from "../components/Search"
import Topic from "../components/Topic";
import Info from "../components/Info";


const MainPage = () =>{
    return(
        <div className="w-full h-screen flex flex-col justify-start items-center gap-6">
            <Topic />
            <SearchInput />
            <Info />
        </div>
    )
}

export default MainPage;