const Hero = () => {
    return ( 
        // <!-- Hero -->
    <section className="bg-blue-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            Search Designer Floor Samples
          </h1>
        </div>
        <form
          className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center"
        >
          <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
            <label htmlFor="location" className="sr-only">Location</label>
            <input
              type="text"
              id="location"
              placeholder="Enter Location (City, State, Zip, etc"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-2/5 md:pl-2">
            <label htmlFor="product-type" className="sr-only">Product Type</label>
            <select
              id="product-type"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="Upholstery">Upholstery</option>
                <option value="Casegoods">Casegoods</option>
                <option value="Area Rugs">Area Rugs</option>
                <option value="Wall Decor">Wall Decor</option>
                <option value="Lighting">Lighting</option>
                <option value="Accents">Accents</option>
                <option value="Florals">Florals</option>
                <option value="Bedding">Bedding</option>
                <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Search
          </button>
        </form>
      </div>
    </section>
     );
}
 
export default Hero;