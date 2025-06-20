export default function Hero() {
  return (
    <section className=" container py-12">
      <h1 className="text-4xl font-bold text-center">
        Find your next <br /> dream job
      </h1>
      {/* <p className="text-center text-gray-600">
        Explore thousands of job opportunities with a single search
      </p> */}
      <form className=" flex gap-2 mt-4 max-w-xl mx-auto">
        <input
          type="search"
          className="border w-full border-gray-400 rounded-md px-2 py-2"
          placeholder="Search phrase.."
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Search
        </button>
      </form>
    </section>
  );
}
