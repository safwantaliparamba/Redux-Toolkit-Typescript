import styled from "styled-components"

import "./assets/css/styles.css"
import Header from "./components/includes/Header"
import Home from "./components/screens/Home"

const App = ()=> {
  return (
	<>
		<Header />
		<Wrapper>
			<h1>Hello world!</h1>
			<Home />
		</Wrapper>
	</>	
  )
}

export default App


const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`