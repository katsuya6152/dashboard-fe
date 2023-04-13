import { createStyles, rem, ScrollArea, Table } from '@mantine/core'
import { useState } from 'react'

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}))

const TestTable = (props: TestDataProps) => {
  const { data } = props
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const rows = data.map((row) => (
    <tr key={row.id * Math.random()}>
      <td>{row.race_name}</td>
      <td>{row.race_place}</td>
      <td>{row.number_of_entries}</td>
      <td>{row.race_state}</td>
      <td>{row.date_sin}</td>
      <td>{row.date_cos}</td>
      <td>{row.age}</td>
      <td>{row.box}</td>
      <td>{row.burden_weight}</td>
      <td>{row.day_of_year}</td>
      <td>{row.horse_order}</td>
      <td>{row.horse_owner}</td>
      <td>{row.horse_trainer}</td>
      <td>{row.horse_weight}</td>
      <td>{row.jockey}</td>
      <td>{row.race_course}</td>
      <td>{row.race_distance}</td>
      <td>{row.race_start}</td>
      <td>{row.race_weather}</td>
      <td>{row.rank}</td>
      <td>{row.sex}</td>
      <td>{row.sex_and_age}</td>
    </tr>
  ))

  return (
    <>
      <ScrollArea
        h={{ lg: 100, xl: 300 }}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <Table>
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              <th>race_name</th>
              <th>race_place</th>
              <th>number_of_entries</th>
              <th>race_state</th>
              <th>date_sin</th>
              <th>date_cos</th>
              <th>age</th>
              <th>box</th>
              <th>burden_weight</th>
              <th>day_of_year</th>
              <th>horse_order</th>
              <th>horse_owner</th>
              <th>horse_trainer</th>
              <th>horse_weight</th>
              <th>jockey</th>
              <th>race_course</th>
              <th>race_distance</th>
              <th>race_start</th>
              <th>race_weather</th>
              <th>rank</th>
              <th>sex</th>
              <th>sex_and_age</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
      {/* <Pagination
        value={1}
        // onChange={onChange}
        total={10}
        color="green"
        withEdges
        className="place-content-center mt-2"
      /> */}
    </>
  )
}

type TestDataType = {
  age: number
  box: number
  burden_weight: number
  date_cos: number
  date_sin: number
  day_of_year: number
  difference_weight: number
  horse_order: number
  horse_owner: number
  horse_trainer: number
  horse_weight: number
  id: number
  jockey: number
  number_of_entries: number
  race_course: number
  race_distance: number
  race_name: number
  race_place: number
  race_start: number
  race_state: number
  race_weather: number
  rank: number
  sex: number
  sex_and_age: number
}

type TestDataProps = {
  data: TestDataType[]
}

export default TestTable
