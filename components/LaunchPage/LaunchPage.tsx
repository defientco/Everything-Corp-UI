const LaunchPage = (props: any) => {
  const { onClick } = props

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div>image</div>
      <div>cre8ors</div>
      <button
        type="button"
        onClick={onClick}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        {" "}
        btn
      </button>
    </div>
  )
}

export default LaunchPage
