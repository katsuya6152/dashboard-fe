import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import CrawlResults from '@/components/raw-data/CrawlResults'
import SearchCriteria from '@/components/raw-data/SearchCriteria'
import RawDataTable from '@/components/raw-data/Table'
import SideBar from '@/components/SideBar'
import { ax } from '@/libs/axios'
import { CrawlResultsType, RaceDataType, SearchCriteriaType } from '@/types'

const RawData: React.FC<Props> = ({ raceData }) => {
  const [active, setActive] = useState(0)
  const [activeTable, setActiveTable] = useState(1)
  const [data, setData] = useState(raceData)
  const [crawlResultData] = useState<CrawlResultsType>({
    information: 4780,
    details: 62057,
    acquisitionDate: '2023/2/5',
  })
  const [SearchCriteriaData] = useState<SearchCriteriaType>({
    racetype: '芝',
    racetrack: '東京/中山/中京/京都/阪神',
    distance: '1600m ~ 3200m',
  })

  const setActivePage = (index: number) => {
    setActive(index)
  }

  const onClickUpdateData = async (page: number): Promise<void> => {
    setActiveTable(page)
    const newData = await ax.get<RaceDataType[]>(`/raw/${page - 1}`)
    setData(newData.data)
  }

  return (
    <>
      <Head>
        <title>Raw Data Page</title>
        <meta name="description" content="Raw Data Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-white">
        <div className="flex h-screen">
          <SideBar active={active} setActive={setActivePage} />
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col justify-center items-center w-full h-2/3">
              <h1>Raw Data</h1>
              <RawDataTable
                page={activeTable}
                onChange={onClickUpdateData}
                data={data}
              />
            </div>
            <div className="flex justify-center w-10/12 pt-16">
              <div className="w-1/2 mx-8">
                <SearchCriteria data={SearchCriteriaData} />
              </div>
              <div className="w-1/2 mx-8">
                <CrawlResults data={crawlResultData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

type Props = {
  raceData: RaceDataType[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const apiUrl = '/raw/0'
  const { data } = await ax.get<RaceDataType[]>(apiUrl)
  return { props: { raceData: data } }
}

export default RawData
