import { v4 as uuidv4 } from 'uuid'

import { useCallback, useEffect, useState, type SetStateAction } from 'react'

import useEmblaCarousel from 'embla-carousel-react'

import { type RepoTypes } from '../types/index'

import { Dot } from './Dot'

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

export const PortfolioCarousel = ({ repos }: RepoTypes) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback(
    (emblaApi: { scrollSnapList: () => SetStateAction<number[]> }) => {
      setScrollSnaps(emblaApi.scrollSnapList())
    },
    []
  )

  const onSelect = useCallback(
    (emblaApi: { selectedScrollSnap: () => SetStateAction<number> }) => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)

    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)

    emblaApi.slideNodes()
  }, [emblaApi, onInit, onSelect])

  return (
    <div className="w-full max-w-[1024px] m-auto max-h-[480px]">
      <div className="border border-slate-700 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {repos.map((repo: RepoTypes, index: number) => {
            return (
              <div
                key={repo.id}
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

      <div className="pt-8 relative flex justify-center gap-4">
        {scrollSnaps.map((_, index) => (
          <Dot
            key={uuidv4}
            onClick={() => scrollTo(index)}
            className={'h-0.5 w-10 bg-white rounded-lg transition'.concat(
              index === selectedIndex ? ' !bg-blue' : ''
            )}
          />
        ))}
      </div>
    </div>
  )
}
