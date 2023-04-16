// components/Dashboard.js
import { Bars3Icon, XMarkIcon, HomeIcon, ShieldCheckIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

const Dashboard = ({ children, setScreens }) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <div className={`flex flex-col w-64 ${collapsed ? "hidden" : "block"}`}>
        <div className="flex items-center justify-center h-16 text-white bg-white shadow-md">
          <span className="text-2xl text-black">Dashboard</span>
        </div>
        <nav className="flex-1 overflow-y-auto bg-white">
          <div className="px-2 mt-5">
            <button
              type="button"
              onClick={() => setScreens("applicants")}
              className="flex items-center w-full px-2 py-2 mt-1 text-sm font-medium text-gray-700 rounded-md group hover:text-gray-900 hover:bg-gray-100"
            >
              <HomeIcon className="w-6 h-6 mr-4 text-gray-500 group-hover:text-gray-600" />
              Allowlist
            </button>
            <button
              type="button"
              onClick={() => setScreens("twitter")}
              className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-700 rounded-md group hover:text-gray-900 hover:bg-gray-100"
            >
              <ShieldCheckIcon className="w-6 h-6 mr-4 text-gray-500 group-hover:text-gray-600" />
              Twitter
            </button>
          </div>
        </nav>
      </div>
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <div className="relative z-10 flex flex-shrink-0 h-16 bg-white shadow-md cursor-pointer">
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:bg-gray-100 focus:text-gray-600 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            {collapsed ? <Bars3Icon className="w-6 h-6" /> : <XMarkIcon className="w-6 h-6" />}
          </button>
          {/* Add other header content here */}
        </div>
        <main className="relative flex-1 overflow-y-auto">
          <div className="py-6">
            <div className="px-4 sm:px-6 md:px-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
