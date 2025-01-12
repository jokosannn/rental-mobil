import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "../components";
import { fuels, yearsOfProduction } from "../constants";

export default function Home() {
  return (
    <div className="relative">
      <main className="overflow-hidden">
        <Hero />

        <div className="mt-12 sm:mt-16 xl:mt-0 padding-x padding-y max-width" id="discover">
          <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore out cars you might like</p>
          </div>

          <div className="mt-10 w-full flex-between items-center flex-wrap gap-4">
            <SearchBar />

            <div className="flex justify-start flex-wrap items-center gap-4">
              <CustomFilter title="fuel" options={fuels} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
          </div>

          <section>
            <div className="home-cars-wrapper">
              <CarCard />
              <CarCard />
              <CarCard />
              <CarCard />
              <CarCard />
              <CarCard />
            </div>

            <ShowMore />
          </section>
        </div>
      </main>
    </div>
  );
}
