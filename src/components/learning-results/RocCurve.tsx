import dynamic from 'next/dynamic'
import React from 'react'
const Area = dynamic(
  () => import('@ant-design/plots').then(({ Area }) => Area),
  { ssr: false },
)

const RocCurve = () => {
  const data = [
    {
      tpr: 0,
      fpr: 0,
    },
    {
      tpr: 0.155,
      fpr: 0.037,
    },
    {
      tpr: 1,
      fpr: 1,
    },
  ]

  const auc = 0.5587

  const config = {
    data,
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
    // autoFit: true,
    annotations: [
      {
        type: 'line',
        start: ['min', 'min'],
        end: ['max', 'max'],
        style: {
          stroke: 'red',
          lineDash: [2, 2],
        },
      },
      {
        type: 'text',
        position: [0, 0.8],
        content: `AUC: ${auc}`,
        offsetY: -4,
        style: {
          textBaseline: 'bottom',
        },
      },
    ],
  }

  return <Area {...config} className="w-1/2" />
}

export default RocCurve
