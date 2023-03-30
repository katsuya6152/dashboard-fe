import { Button, rem, Tooltip } from '@mantine/core'
import { IconLogin, IconThumbUpFilled } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { useState } from 'react'

export function StartButton() {
  const [isClicked, setIsClicked] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setIsClicked((prev) => !prev)
    router.push('/row-data')
  }

  return (
    <Tooltip
      label="Start"
      offset={5}
      position="bottom"
      radius="xl"
      transitionProps={{ duration: 100, transition: 'slide-down' }}
    >
      <Button
        variant="light"
        rightIcon={
          isClicked ? (
            <IconThumbUpFilled size="1.2rem" stroke={1.5} />
          ) : (
            <IconLogin size="1.2rem" stroke={1.5} />
          )
        }
        radius="xl"
        size="md"
        styles={{
          root: { paddingRight: rem(14), height: rem(48) },
          rightIcon: { marginLeft: rem(22) },
        }}
        onClick={handleClick}
      >
        Start !
      </Button>
    </Tooltip>
  )
}
