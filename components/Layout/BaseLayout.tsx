import React from "react"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import Header from "../Header"
import Footer from "../Footer"

function BaseLayout({ children }: ILayout) {
  return (
    <div className="h-screen text-black bg-[black]">
      <SeoHead title="Evil Corp" description="Evil Corp" image="/evclogoIcon.png" />
      <Header />
      <div className="relative z-[2] flex justify-center pt-[60px] md:pt-[120px] bg-black">
        <div className="max-w-[1280px]">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default BaseLayout
