import { Select } from '@mantine/core'

const VersionSelect = () => {
  return (
    <Select
      label="Model Version"
      placeholder="Pick one"
      data={[{ value: '0', label: 'Version 0' }]}
      className="max-w-xs"
      defaultValue="0"
    />
  )
}

export default VersionSelect
