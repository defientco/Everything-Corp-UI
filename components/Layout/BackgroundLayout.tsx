import React from "react"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import Header from "../Header"
import Footer from "../Footer"

function BackgroundLayout({ children }: ILayout) {
  return (
    <div className="h-screen text-black">
      <SeoHead title="Everything Corp" description="Everything Corp" image="/evclogoIcon.png" />
      <Header />
      <div className="relative z-[2] flex justify-center pt-[100px] md:pt-[180px] bg-[url('/FAQ/background.svg')] bg-cover min-h-[100vh] bg-[bottom_right]">
        <div className="max-w-[1280px]">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default BackgroundLayout
