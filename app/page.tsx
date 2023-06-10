import { CarCard, Hero, SearchBar } from '@/components'
import { fetchCars } from '@/utils'

interface Props {
  searchParams: {
    manufacturer: string
    year: number
    fuel: string
    limit: number
    model: string
  }
}

export default async function Home({ searchParams }: Props) {
  const allCars = await fetchCars({
    manufacturer: searchParams?.manufacturer || '',
    year: searchParams?.year || 2022,
    fuel: searchParams?.fuel || '',
    limit: searchParams?.limit || 10,
    model: searchParams?.model || ''
  })

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars



  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you migth like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            {/* <CustomFilter title="fuel" />
            <CustomFilter title="year" /> */}
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} key={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            {allCars?.message}
          </div>
        )}
      </div>
    </main>
  )
}
