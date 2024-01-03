import { useEffect, useId } from 'react'
import { type RepoTypes } from '../types/index'

import useEmblaCarousel from 'embla-carousel-react'

import battlebitArsenal from '../images/portfolio/battlebit-arsenal.png'
import igniteShop from '../images/portfolio/ignite-shop.png'
import marvelSuperHeroes from '../images/portfolio/marvel-super-heroes.png'
import portfolio from '../images/portfolio/portfolio.png'
import toDoList from '../images/portfolio/to-do-list.png'

const repoImages = [
  battlebitArsenal,
  igniteShop,
  marvelSuperHeroes,
  portfolio,
  toDoList,
]

export const PortfolioCarousel = ({ repos }: any) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const id = useId()

  useEffect(() => {
    if (emblaApi) {
      emblaApi.slideNodes()
    }
  }, [emblaApi])

  return (
    <div className="w-full max-w-[1024px] m-auto max-h-[440px]">
      <div className="overflow-hidden border border-slate-700" ref={emblaRef}>
        <div className="flex gap-4">
          {repos.map((repo: RepoTypes, index: number) => {
            return (
              <div
                key={id}
                className="flex-shrink-0 flex-grow-0 basis-full min-w-0"
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="h-[440px] p-4 relative flex items-end"
                >
                  <div className="flex-1">
                    <div className="bg-black w-full h-full absolute top-0 left-0 z-0 overflow-hidden">
                      <img
                        width={1006}
                        height={438}
                        src={repoImages[index].src}
                        alt={repo.name}
                        className="w-full h-full object-contain md:object-cover object-center md:object-top hover:scale-105 transition duration-200"
                      />

                      <div className="h-full w-full absolute top-0 bg-black/40 pointer-events-none" />
                    </div>

                    <div className="relative z-10 pointer-events-none">
                      <strong className="font-secondary md:text-lg font-semibold text-white capitalize">
                        {repo.name.replaceAll('-', ' ')}
                      </strong>

                      <p className="text-white text-sm md:text-base">
                        {repo.description}
                      </p>

                      <p className="text-white text-sm md:text-base capitalize pt-2">
                        <strong>Stack</strong>: {repo.topics.join(', ')}.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
