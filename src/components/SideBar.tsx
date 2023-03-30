import {
  createStyles,
  Navbar,
  rem,
  Stack,
  Tooltip,
  UnstyledButton,
} from '@mantine/core'
import {
  IconDatabase,
  IconDeviceDesktopAnalytics,
  IconRobot,
} from '@tabler/icons-react'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(60),
    height: rem(60),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}))

interface NavbarLinkProps {
  icon: React.FC<any>
  label: string
  active?: boolean
  onClick?: () => void
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles()
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon size="1.6rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  )
}

const mockdata = [
  { icon: IconDatabase, label: 'Raw Data' },
  { icon: IconRobot, label: 'Learning Results' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analysis' },
]

export default function Sidebar(props: sideBarProps) {
  const { active, setActive } = props
  const router = useRouter()

  const handleClick = (index: number) => {
    setActive(index)
    switch (index) {
      case 0:
        router.push('/row-data')
        break
      case 1:
        router.push('/learning-results')
        break
      case 2:
        router.push('/analysis')
        break
    }
  }

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => handleClick(index)}
    />
  ))

  return (
    <Navbar width={{ base: 90 }} p="md">
      <Navbar.Section grow mt={120}>
        <Stack justify="center" spacing={12}>
          {links}
        </Stack>
      </Navbar.Section>
    </Navbar>
  )
}

type sideBarProps = {
  active: number
  setActive: (index: number) => void
}
