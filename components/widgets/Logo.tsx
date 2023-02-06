
import Image from "next/image" 
const Logo = () => {
    return <>
    <div className="mb-2 sm:mb-0 grid grid-cols-2 justify-items-center place-items-center">
          <div className="mr-2 ">
           
          <Image
              src="/logo.png"
              alt="Bonga town development Logo" 
              width={100 } height={100}
              priority
            />
          </div>
          <div>
            <a href="/home" className="text-2xl no-underline text-green-600 text-grey-darkest hover:text-blue-dark font-sans font-bold">Bonga Town</a><br />
            <span className="text-xs text-grey-dark text-green-500">Development</span>
          </div>
        </div>
   

    </>
}
 

export default Logo;