import dynamic from 'next/dynamic'
import React, { useState } from 'react'
const Heatmap = dynamic(
  () => import('@ant-design/plots').then(({ Heatmap }) => Heatmap),
  { ssr: false },
)

const ConfusionMatrix = (props: ConfusionMatrixProps) => {
  const [data] = useState([
    {
      Predicted: 'Predicted Positive',
      value: props.data.fp,
      Actual: 'Actual Negative',
    },
    {
      Predicted: 'Predicted Negative',
      value: props.data.fn,
      Actual: 'Actual Positive',
    },
    {
      Predicted: 'Predicted Positive',
      value: props.data.tp,
      Actual: 'Actual Positive',
    },
    {
      Predicted: 'Predicted Negative',
      value: props.data.tn,
      Actual: 'Actual Negative',
    },
  ])

  const config = {
    data,
    xField: 'Predicted',
    yField: 'Actual',
    colorField: 'value',
    sizeField: 'value',
    shape: 'square',
    color: ['#dddddd', '#9ec8e0', '#5fa4cd', '#2e7ab6', '#114d90'],
    label: {
      style: {
        fill: '#000',
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .45)',
      },
    },
  }

  return <Heatmap {...config} className="max-h-60" />
}

type ConfusionMatrixProps = {
  data: {
    tp: number
    fp: number
    tn: number
    fn: number
  }
}

export default ConfusionMatrix
