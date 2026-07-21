import SideBar from "../ui/sidebar/SideBar";
import StoreProvider from "../provider";


export const metadata = {
    title: "Readzz - buy or rent Books",
    descriprion: "BookStore to sell and rent used books",
}

export default function BookStoreLayout({children}){
   return (
    <StoreProvider>
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden bg-gray-100 lg:flex-cols">
    {/* <div className="flex flex-wrap p-2 items-start left justify-start"> */}
     <SideBar />
    {children}
    {/* </div> */}
    </div>
    </StoreProvider>
   )
}