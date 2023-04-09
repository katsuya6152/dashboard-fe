import dynamic from 'next/dynamic'
import React from 'react'
const Bar = dynamic(() => import('@ant-design/plots').then(({ Bar }) => Bar), {
  ssr: false,
})

const ImportanceBar = (props: ImportanceProps) => {
  const config = {
    data: props.data,
    xField: 'value',
    yField: 'feature',
  }
  return <Bar {...config} className="!h-full" />
}

type ImportanceProps = {
  data: {
    feature: string
    value: number
  }[]
}

export default ImportanceBar
