import React from "react"
import { ChoiceOptions, Screens } from "../../lib/enums"

/* eslint-disable @next/next/no-img-element */
const ChoiceScreen: React.FC<{ onClickHandler: (value: number, screen: number) => void }> = ({
  onClickHandler,
}) => (
  <div className="flex flex-row items-center justify-center w-full h-screen gap-12">
    <button
      type="button"
      className="overflow-hidden border-4 border-red-500 shadow-lg cursor-pointer rounded-xl max-w-s"
      onClick={() => onClickHandler(ChoiceOptions.PickYourCre8orType, Screens.PickYourCre8orType)}
    >
      <div className="p-10">
        <div className="m-2 text-xl font-bold">Pick Your Cre8or Type</div>
        <p className="text-xl text-white-700">
          For those that know their Cre8or Type.
          <br /> Click to see choices and learn more.
        </p>
      </div>
    </button>
    <button
      type="button"
      className="overflow-hidden border-4 border-red-500 shadow-lg cursor-pointer rounded-xl max-w-s"
      onClick={() => onClickHandler(ChoiceOptions.FindYourCre8orType, Screens.FindYourCre8orType)}
    >
      <div className="p-10">
        <div className="m-2 text-xl font-bold">Find your Cre8or Type</div>
        <p className="text-xl text-white-700">
          For those unsure of their Cre8or Type.
          <br /> Take a quiz to find out.
        </p>
      </div>
    </button>
  </div>
)

export default ChoiceScreen
