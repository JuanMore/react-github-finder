import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/Alert/AlertContext'
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main className='container mx-auto px-3 pb-12'>
          {/* Routes wrapped in <Routes> */}
          <Routes>
            {/* Home route */}
            <Route path='/' element={<Home />}></Route>
            {/* About route */}
            <Route path='/about' element={<About />}></Route>
            {/* Not Found route (to send - optional) */}
            <Route path='/notfound' element={<NotFound />}></Route>
            {/* Not Found (404) route */}
            <Route path='/*' element={<NotFound />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
      </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
