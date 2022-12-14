import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About_section from './components/About_section';
import Parent from './components/Parent';
import ReadParent from './components/ReadParent';
import Work2 from './components/work2';
import ContactTwo from './components/ContactTwo';
import Resume from './components/Resume';
import { useEffect, useState } from 'react'
import AnimCursor from './components/animated-cursor';
import { AnimatePresence } from 'framer-motion'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

  return (
      <div>
  <AnimatePresence initial={false} mode={"wait"}>
     {loading ? (
  <div className='loading'>
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
      <AnimCursor/>
  </div> 
      ) : (
  <Routes key={Router.pathname}>
    <Route path='/' element={<Parent />} />
    <Route path='About_section' element={<About_section/>} />
    <Route path='/Reads' element={<ReadParent/>} />
    <Route path='/work2' element={<Work2/>} />
    <Route path='/ContactTwo' element={<ContactTwo/>} />
    <Route path='/resume' element={<Resume/>} />
  </Routes>
   )} 
   </AnimatePresence>
   <AnimCursor/>
    </div>
  );
}

export default App;