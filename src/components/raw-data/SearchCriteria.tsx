import { Card } from '@mantine/core'

import { SearchCriteriaType } from '@/types'

const SearchCriteria = (props: CrawlResultsProps) => {
  const { racetype, racetrack, distance } = props.data
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <h1 className="mt-0">Search Criteria</h1>
      <div className="mx-auto">
        <div className="grid grid-cols-3 row-gap-8">
          <div className="text-center border-r">
            <h6 className="text-2xl font-bold my-0">{racetype}</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800">
              競走種別
            </p>
          </div>
          <div className="text-center border-r">
            <h6 className="text-base font-bold my-0">{racetrack}</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800">
              競馬場
            </p>
          </div>
          <div className="text-center border-r">
            <h6 className="text-base font-bold my-0">{distance}</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800">
              距離
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
export default SearchCriteria

type CrawlResultsProps = {
  data: SearchCriteriaType
}
