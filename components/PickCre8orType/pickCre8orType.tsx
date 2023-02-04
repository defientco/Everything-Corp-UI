import React from "react"
import Cre8orsContext from "../../providers/Crea8orsContext"

const PickCre8orType: React.FC = () => {
  const { cre8orTypes } = React.useContext(Cre8orsContext)
  return (
    <div>
      {cre8orTypes.map((cre8or) => (
        <div key={cre8or.title}>
          <div>{cre8or.title}</div>
          <div>{cre8or.description}</div>
        </div>
      ))}
    </div>
  )
}

export default PickCre8orType
