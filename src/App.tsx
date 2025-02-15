import './App.css'
import { Homepage } from './components/Homepage/Homepage'
import { PageLayout } from './components/PageLayout/PageLayout'
import { WishList } from './components/WishList/WishList'

function App() {

  return (
    <PageLayout>
      {/* <WishList/> */}
      <Homepage/>
    </PageLayout>
  )
}

export default App
