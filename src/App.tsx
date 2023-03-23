import { HelmetProvider } from "react-helmet-async"

import MainProvider from "./providers/MainProvider"
import Routing from "./routing/Routing"

function App() {
  const helmetContext = {}

  return (
    <MainProvider>
      <HelmetProvider context={helmetContext}>
        <Routing />
      </HelmetProvider>
    </MainProvider>
  )
}

export default App
