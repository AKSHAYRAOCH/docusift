import { Files, LogOut, Search, Settings } from "lucide-react";
import Link from "next/link";
import { SignOut } from "./sign-out";

export function SideBar() {
    return (
        <div className="h-screen bg-white border-r border-gray-200 shadow-lg">
            {/* Brand Header */}
            <div className="px-6 py-8 border-b border-gray-100">
                <h1 className="flex items-center gap-2">
                    {/* Logo Icon */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-white">D</span>
                    </div>
                    {/* Brand Name */}
                    <span className="text-3xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent tracking-tight">
                        Docusift
                    </span>
                </h1>
            </div>

            <nav className="mt-4">
                <ul className="flex flex-col text-[15px] font-medium text-gray-600">
                    {/* Documents */}
                    <li>
                        <Link
                            href="/documents"
                            className="flex items-center gap-3 mx-4 my-1 px-6 py-3 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all duration-300 ease-in-out group"
                        >
                            <Files className="group-hover:scale-110 transition-transform duration-300 w-[20px] h-[20px]" />
                            <span className="font-medium tracking-wide">Documents</span>
                        </Link>
                    </li>

                    {/* Search */}
                    <li>
                        <Link
                            href="/search"
                            className="flex items-center gap-3 mx-4 my-1 px-6 py-3 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all duration-300 ease-in-out group"
                        >
                            <Search className="group-hover:scale-110 transition-transform duration-300 w-[20px] h-[20px]" />
                            <span className="font-medium tracking-wide">Search</span>
                        </Link>
                    </li>

                    {/* Settings */}
                    <li>
                        <Link
                            href="/settings"
                            className="flex items-center gap-3 mx-4 my-1 px-6 py-3 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all duration-300 ease-in-out group"
                        >
                            <Settings className="group-hover:scale-110 transition-transform duration-300 w-[20px] h-[20px]" />
                            <span className="font-medium tracking-wide">Settings</span>
                        </Link>
                    </li>

                    {/* Sign Out */}
                    <li className="mt-auto">
                        <div className="flex items-center gap-3 mx-4 my-1 px-6 py-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-300 ease-in-out group cursor-pointer">
                            <LogOut className="group-hover:scale-110 transition-transform duration-300 w-[20px] h-[20px]" />
                            <span className="font-medium tracking-wide">Sign Out</span>
                        </div>
                    </li>
                </ul>
            </nav>

            {/* Decorative gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700" />
        </div>
    );
}
