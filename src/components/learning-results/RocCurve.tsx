import { AreaConfig } from '@ant-design/charts'
import dynamic from 'next/dynamic'
import React from 'react'
const Area = dynamic(
  () => import('@ant-design/plots').then(({ Area }) => Area),
  { ssr: false },
)

const RocCurve = (props: RocCurveProps) => {
  const config = {
    data: props.data,
    xField: 'fpr',
    yField: 'tpr',
    xAxis: {
      range: [0, 1],
    },
    yAxis: {
      range: [0, 1],
    },
    meta: {
      tpr: { type: 'linear' },
      fpr: { type: 'linear' },
    },
    autoFit: true,
    annotations: [
      {
        type: 'line',
        start: [0, 0],
        end: [1, 1],
        style: {
          stroke: 'red',
          lineDash: [2, 2],
        },
      },
      {
        type: 'text',
        position: ['0%', '10%'],
        content: `AUC: ${props.auc}`,
      },
    ],
  } as AreaConfig

  return <Area {...config} className="w-1/2" />
}

type RocCurveProps = {
  data: {
    tpr: number
    fpr: number
  }[]
  auc: string
}

export default RocCurve
