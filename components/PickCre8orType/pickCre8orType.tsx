import React from "react"
import { Screens } from "../../lib/enums"
import { useCre8orsProvider } from "../../providers/Crea8orsProvider"

const PickCre8orType: React.FC = () => {
  const { cre8orTypes, setCreatorType, setScreen } = useCre8orsProvider()

  return (
    cre8orTypes?.length && (
      <div className="justify-center text-center align-middle">
        <div className="grid gap-2 lg:grid-cols-4 gap-y-4">
          {cre8orTypes.map((cre8orType) => (
            <button
              type="button"
              className="max-w-xs mx-4 mb-2 bg-white rounded-lg shadow-lg cursor-pointer"
              key={cre8orType.title}
              onClick={() => {
                setCreatorType(cre8orType.title)
                setScreen(Screens.Details)
              }}
            >
              <div className="px-6 py-4">
                <h4 className="mb-2 text-xl font-semibold tracking-tight text-gray-800">
                  {cre8orType.title}
                </h4>
                <p className="leading-normal text-gray-700">{cre8orType.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  )
}

export default PickCre8orType
