import { Link } from 'react-router-dom';
import Menu from './Menu';
import Navbar from './Navbar';


export default function DashboardLayout({ children }) {
    return (
        <div className="h-screen flex">
            {/* LEFT */}
            <div className=" w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
                <Link to="/" className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                    <img src="./public/logo.png" alt="logo" width={36} height={36} />
                    <span className="hidden lg:block font-bold  text-gray-700 text-2xl">DPS</span>
                </Link>
                <Menu />
            </div>
            {/* RIGHT */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#00b7ff] overflow-scroll flex flex-col ">
                <Navbar />
                {children}
            </div>
        </div>
    );
}
