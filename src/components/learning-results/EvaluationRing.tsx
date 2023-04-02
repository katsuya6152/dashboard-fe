import { RingProgress, Text } from '@mantine/core'

type EvaluationProps = {
  label: string
  value: number
}

const EvaluationRing = (props: EvaluationProps) => {
  const { label, value } = props
  return (
    <>
      <RingProgress
        size={170}
        sections={[{ value: value * 100, color: 'teal' }]}
        label={
          <>
            <Text color="teal" weight={700} align="center" size="xl">
              {label}
            </Text>
            <Text align="center">{value.toFixed(3)}</Text>
          </>
        }
      />
    </>
  )
}
export default EvaluationRing
