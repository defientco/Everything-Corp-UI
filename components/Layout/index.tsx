import { useEffect } from "react"
import BaseLayout from "./BaseLayout"
import { ILayout } from "./types"
import { useTheme } from "../../providers/ThemeProvider"
import BackgroundLayout from "./BackgroundLayout"

const layoutContainers = {
  base: BaseLayout,
  background: BackgroundLayout
}

interface ILayoutFactory extends ILayout {
  type: keyof typeof layoutContainers
}

function Layout({ children, type }: ILayoutFactory) {
  const { onChangeThemeConfig } = useTheme()

  useEffect(() => {
    onChangeThemeConfig("light")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const Container = layoutContainers[type]

  return <Container>{children}</Container>
}

export default Layout
