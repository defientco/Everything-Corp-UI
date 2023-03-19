const Contact = () => (
  <div id="contact" className="flex flex-col items-center justify-center ">
    <p className="p-4 text-4xl font-bold font-aldrich">Contact Us</p>
    <div className="items-center justify-center border-2 border-white rounded-lg border-spacing-4">
      <div className="mt-12 mb-4 border-2 border-b-white" />
      <div className="px-24 py-12">
        <form className="items-center justify-center w-full max-w-lg ">
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="block mb-2 font-bold tracking-wide text-gray-100 uppercase text-md font-aldrich"
                htmlFor="grid-first-name"
              >
                Full Name
              </label>
              <input
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-800 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="block mb-2 font-bold tracking-wide text-gray-100 uppercase font-aldrich text-md"
                htmlFor="grid-last-name"
              >
                Email
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight text-gray-800 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="@evilcorp.com"
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3">
              <label
                className="block mb-2 font-bold tracking-wide text-gray-100 uppercase text-md font-aldrich"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-800 bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="items-center justify-center w-1/3">
              <button
                className="items-center px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-md shadow font-aldrich"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default Contact
