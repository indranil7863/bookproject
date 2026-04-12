import Link from "next/link"


function Navbar() {
  return (
    <nav className="border border-b-gray-300 sticky top-0">
        <div className="max-w-[50%] mx-auto flex items-center justify-between py-4 ">
        <div>
            <Link href={'/'} className="text-red-600 text-2xl  px-2 py-1 rounded-[5px] border-2 ">
            BookShop
            </Link>
        </div>
        <div className="flex gap-4">
            <button className="text-red-500 border border-red-500 px-2 py-1 rounded-[5px] hover:bg-red-300 hover:text-white">sign in</button>
            <button className="text-white border  px-2 py-1 rounded-[5px] bg-red-400">sign up</button>
        </div>
        </div>
    </nav>
  )
}

export default Navbar