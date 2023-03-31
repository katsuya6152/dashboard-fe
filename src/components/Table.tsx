import { createStyles, Pagination, rem, ScrollArea, Table } from '@mantine/core'
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

type Race = {
  id: string
  race_name: string
  race_place: string
  number_of_entries: number
  race_state: string
  date: string
  race_sesults: []
}

export const RowDataTable = (props: dataProps) => {
  const { page, onChange, data } = props
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const rows = data.map((row) => (
    <tr key={row.id}>
      <td>{row.race_name}</td>
      <td>{row.race_place}</td>
      <td>{row.number_of_entries}</td>
      <td>{row.race_state}</td>
      <td>{row.date}</td>
    </tr>
  ))

  return (
    <>
      <ScrollArea
        className="w-10/12"
        h={600}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <Table>
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              <th>レース名</th>
              <th>競馬場</th>
              <th>エントリー数</th>
              <th>レース状態</th>
              <th>日付</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
      <Pagination
        value={page}
        onChange={onChange}
        total={10}
        color="green"
        withEdges
      />
    </>
  )
}

type dataProps = {
  data: Race[]
  page: number
  onChange: (value: number) => void
}
