import { useEffect } from 'react';
import { BsSortDownAlt } from 'react-icons/bs';


function App() {
  useEffect(() => {
    const handleScrollDown = () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    };

    const projectsDiv = document.querySelector('.projects');
    projectsDiv.addEventListener('click', handleScrollDown);

    return () => {
      projectsDiv.removeEventListener('click', handleScrollDown);
    };
  }, []); 

  return (
    <div>
      <div className='projects'>
        <span className='projectSpan'>Projects</span>
        <BsSortDownAlt className='projectIcon' />
      </div>

    </div>
  );
}

export default App;