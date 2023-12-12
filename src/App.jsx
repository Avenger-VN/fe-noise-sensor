import "./styles/App.css"
import AppHeader from "./components/AppHeader"
import PageContent from "./components/PageContent"
import SideMenu from "./components/SideMenu"

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </main>
    </div>
  )
}

export default App
