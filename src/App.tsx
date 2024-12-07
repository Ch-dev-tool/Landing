import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/utils/Nav.component'

function App() {

  return (
    <>
      <Navbar />
      <h1 className='text-blue-700'>My protofolio </h1>
      <Button>Click me </Button>
    </>
  )
}

export default App
