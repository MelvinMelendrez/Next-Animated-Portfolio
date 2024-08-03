import React from 'react';

import { AiFillEye, AiFillGithub } from 'react-icons/ai';

const CardsHud: React.FC = () => {
  const projects = [
    {
      title: 'Auth Map',
      subtitle: 'Angular',
      image:
        'https://cdn.sanity.io/images/ohx8wpby/production/223b4126281cddbe28215abe090e5931903adfb9-1437x1503.jpg',
      color: '#00BCD4',
      gitHub: 'https://github.com/MelvinMelendrez/authMap.git',
      visit: 'https://auth-map-grmg.vercel.app/'
    },
    {
      title: 'Animated portfolio',
      subtitle: 'Next',
      image:
        'https://cdn.sanity.io/images/ohx8wpby/production/19fdc2bb0aa3b0a1faf5646cb8b7d2c8dde2ede9-1440x1520.jpg',
      color: '#9C27B0',
      gitHub: 'https://github.com/MelvinMelendrez/Next-AnimatedPortfolio.git',
      visit: 'https://next-animated-portfolio.vercel.app/'
    },
    {
      title: "Melvin's portfolio",
      subtitle: 'React',
      image:
        'https://cdn.sanity.io/images/ohx8wpby/production/beeb006981c79f72ad02ca581f1c5fb32f5dde8b-696x822.png',
      color: '#F44336',
      gitHub: 'https://github.com/MelvinMelendrez/melvin-s-portfolio',
      visit: 'https://melvinapp.com'
    },
    {
      title: "food blog",
      subtitle: 'Vue',
      image: 'https://cdn.sanity.io/images/ohx8wpby/production/7b7b5bf1fed4daee46fc41b258792bbfe9279617-1440x1714.jpg',
      color: '#F44336',
      gitHub: 'https://github.com/MelvinMelendrez/Vue-food-blog',
      visit: 'https://vue-food-blog.vercel.app/'
    },
    // {
    //   title: 'Healty blog',
    //   subtitle: 'Next',
    //   image:
    //     'https://cdn.sanity.io/images/ohx8wpby/production/7f7a2f05037be61fb6538c0b96769b70fec544ed-1439x759.png',
    //   color: '#FFC107',
    //   gitHub: 'https://github.com/MelvinMelendrez/Blog.git',
    //   visit:'https://blog-six-ivory.vercel.app/'
    // },
    // {
    //   title: 'Melvin portfolio',
    //   subtitle: 'React',
    //   image:
    //     'https://cdn.sanity.io/images/ohx8wpby/production/12284ecf9dc8f40d15c63481550d07b9e4fd6325-1229x787.png',
    //   color: '#F44336',
    //   gitHub: 'https://github.com/MelvinMelendrez/portfolio',
    //   visit: 'https://portfolio-git-main-krispis0.vercel.app/'
    // },
    // {
    //   title: 'Go Travel',
    //   subtitle: 'React Native',
    //   image:
    //     'https://cdn.sanity.io/images/ohx8wpby/production/782022d291278a6c2de1ef15d35df30aaef7a5dc-370x1027.jpg',
    //   color: '#4CAF50',
    //   gitHub: 'https://github.com/MelvinMelendrez/Go-Travel.git',
    //   visit:'https://cdn.sanity.io/images/ohx8wpby/production/9b2898a654a087fa109ff6ccbf6294de27c53636-702x1024.jpg'
    // }
  ];

  return (
    <>
      <div className='animatedCards'>
        {projects.map((project) => (
          <div
            key={project.title}
            className="cardProjects"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="content2">
              <span className='projectSubTitle'>{project.subtitle}</span>
              <br />
              <br />
              <br />
              <span className='projectTitle'>{project.title}</span>
            </div>

            <div className="icons">

              <a href={project.visit} target="_blank" className='iconCard'>
                <i>
                  <AiFillEye />
                </i>
              </a>

              <a href={project.gitHub} target="_blank" className='iconCard'>
                <i>
                  <AiFillGithub />
                </i>
              </a>

            </div>

          </div>
        ))}
      </div>
    </>
  );
};

export default CardsHud;


