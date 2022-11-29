import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const App = () => (
  <>
    <GlobalStyle/>
    <Header/>
    <div>portifolio netflix theme</div>
  </>
)


export default App;
