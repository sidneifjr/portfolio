import { useEffect, useId } from 'react'

import useEmblaCarousel from 'embla-carousel-react'

import battlebitArsenal from '../images/portfolio/battlebit-arsenal.png'
import igniteShop from '../images/portfolio/ignite-shop.png'
import marvelSuperHeroes from '../images/portfolio/marvel-super-heroes.png'
import portfolio from '../images/portfolio/portfolio.png'
import toDoList from '../images/portfolio/to-do-list.png'

type RepoTypes = {
  [x: string]: any
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  owner: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }
  html_url: string
  description: string
  fork: boolean
  url: string
  forks_url: string
  keys_url: string
  collaborators_url: string
  teams_url: string
  hooks_url: string
  issue_events_url: string
  events_url: string
  assignees_url: string
  branches_url: string
  tags_url: string
  blobs_url: string
  git_tags_url: string
  git_refs_url: string
  trees_url: string
  statuses_url: string
  languages_url: string
  stargazers_url: string
  contributors_url: string
  subscribers_url: string
  subscription_url: string
  commits_url: string
  git_commits_url: string
  comments_url: string
  issue_comment_url: string
  contents_url: string
  compare_url: string
  merges_url: string
  archive_url: string
  downloads_url: string
  issues_url: string
  pulls_url: string
  milestones_url: string
  notifications_url: string
  labels_url: string
  releases_url: string
  deployments_url: string
  created_at: string
  updated_at: string
  pushed_at: string
  git_url: string
  ssh_url: string
  clone_url: string
  svn_url: string
  homepage: string
  size: number
  stargazers_count: number
  watchers_count: number
  language: string
  has_issues: boolean
  has_projects: boolean
  has_downloads: boolean
  has_wiki: boolean
  has_pages: boolean
  has_discussions: boolean
  forks_count: number
  mirror_url: null
  archived: boolean
  disabled: boolean
  open_issues_count: number
  license: {
    key: string
    name: string
    spdx_id: string
    url: string
    node_id: string
  }
  allow_forking: boolean
  is_template: boolean
  web_commit_signoff_required: boolean
  topics: string[]
  visibility: string
  forks: number
  open_issues: number
  watchers: number
  default_branch: string
}

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
      console.log(emblaApi.slideNodes())
    }
  }, [emblaApi])

  return (
    <div className="w-full max-w-[1024px] m-auto max-h-[440px]">
      <div className="overflow-hidden  border border-slate-700" ref={emblaRef}>
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
                        src={String(repoImages[index].src)}
                        alt={repo.name}
                        className="w-full h-full object-cover object-top hover:scale-105 transition duration-200"
                      />

                      <div className="h-full w-full absolute top-0 bg-black/40 pointer-events-none" />
                    </div>

                    <div className="relative z-10 pointer-events-none">
                      <strong className="font-secondary text-lg font-semibold text-white capitalize">
                        {repo.name.replaceAll('-', ' ')}
                      </strong>

                      <p className="text-white">{repo.description}</p>

                      <p className="text-white capitalize pt-2">
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
