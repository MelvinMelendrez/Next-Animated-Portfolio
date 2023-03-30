import { useEffect } from 'react';

function ProjectsIcon() {
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
    <span className='projects'>( Projects )</span>
  );
}

export default ProjectsIcon;
