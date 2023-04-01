import { Card } from '@mantine/core'

import { CrawlResultsType } from '@/types'

const CrawlResults = (props: CrawlResultsProps) => {
  const { information, details, acquisitionDate } = props.data
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <h1 className="mt-0">Crawl Results</h1>
      <div className="mx-auto ">
        <div className="grid grid-cols-3 row-gap-8">
          <div className="text-center">
            <h6 className="text-4xl font-bold my-0">{information}</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800">
              レース情報取得件数
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-4xl font-bold my-0">{details}</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800">
              レース詳細取得件数
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-4xl font-bold my-0 whitespace-nowrap">
              {acquisitionDate}
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800">
              最終取得時間
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
export default CrawlResults

type CrawlResultsProps = {
  data: CrawlResultsType
}
