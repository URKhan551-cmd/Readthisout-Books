import SideBar from "../ui/sidebar/SideBar";


export const metadata = {
    title: "Readzz - buy or rent Books",
    descriprion: "BookStore to sell and rent used books",
}

export default function BookStoreLayout({children}){
   return (
    <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row ">
    <div className="flex flex-wrap p-2 justify-center">
     <SideBar />
    {children}
    </div>
    </div>
   )
}