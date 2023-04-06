import dynamic from 'next/dynamic'
import React from 'react'
const Bar = dynamic(() => import('@ant-design/plots').then(({ Bar }) => Bar), {
  ssr: false,
})

const ImportanceBar = () => {
  const data = [
    {
      feature: 'jockey',
      value: 637,
    },
    {
      feature: 'horse_trainer',
      value: 437,
    },
    {
      feature: 'horse_owner',
      value: 405,
    },
    {
      feature: 'horse_weight',
      value: 356,
    },
    {
      feature: 'id',
      value: 267,
    },
    {
      feature: 'day_of_year',
      value: 189,
    },
    {
      feature: 'race_name',
      value: 188,
    },
    {
      feature: 'date_sin',
      value: 151,
    },
    {
      feature: 'date_cos',
      value: 135,
    },
    {
      feature: 'difference_weight',
      value: 129,
    },
    {
      feature: 'number_of_entries',
      value: 128,
    },
    {
      feature: 'age',
      value: 128,
    },
    {
      feature: 'race_start',
      value: 124,
    },
    {
      feature: 'sex_and_age',
      value: 111,
    },
    {
      feature: 'horse_order',
      value: 108,
    },
    {
      feature: 'burden_weight',
      value: 77,
    },
    {
      feature: 'box',
      value: 58,
    },
    {
      feature: 'race_place',
      value: 38,
    },
    {
      feature: 'race_distance',
      value: 38,
    },
    {
      feature: 'race_state',
      value: 19,
    },
    {
      feature: 'race_weather',
      value: 17,
    },
    {
      feature: 'race_course',
      value: 9,
    },
    {
      feature: 'sex',
      value: 1,
    },
  ]

  const config = {
    data,
    xField: 'value',
    yField: 'feature',
  }
  return <Bar {...config} />
}

export default ImportanceBar
