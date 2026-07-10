import Image from "next/image";
import backgroundImage from "../../public/backgroundImage.jpg";
import Link from "next/link";


export default function Home() {
  return (
   <div className="flex flex-cols relative justify-center items-center h-screen">
    <Image className="blur-sm"
     src={backgroundImage} 
      alt="background Image"
      fill
      size="100vw"
      style={{objectFit: "cover"}}
      
    />
    <div className="flex flex-col z-10 justify-center items-center bg-gray-700 rounded-md p-3 lg:w-2/5 h-1/4">
      <div className="flex flex-col pb-5 gap-2 text-4xl text-purple-400">
      <p>Readiness</p>
      <div className="bg-purple-600 text-white rounded-sm p-2 hover:bg-gray-300 hover:text-black">
        <Link href="/store">Take me to the store</Link>
      </div>
      </div>
      </div>
    
  </div>
  );
}
