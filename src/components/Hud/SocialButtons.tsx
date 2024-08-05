import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const SocialButtons: React.FC = () => {
  function handleActionClick() {
    const action1 = document.querySelector('.action') as HTMLElement;
    action1?.classList.toggle('active');
  }

  function handleClickOutside(event: MouseEvent) {
    const action1 = document.querySelector('.action') as HTMLElement;
    if (action1 && !action1.contains(event.target as Node)) {
      action1.classList.remove('active');
    }
  }

  function handleScroll() {
    const action1 = document.querySelector('.action') as HTMLElement;
    action1?.classList.remove('active');
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const socialNetworks = [
    { name: 'LinkedIn', icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', link: 'https://www.linkedin.com/in/melvinmelendrez/' },
    { name: 'Github', icon: 'https://cdn-icons-png.flaticon.com/512/733/733609.png', link: 'https://github.com/MelvinMelendrez' },
    // { name: 'Instagram', icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png', link: 'https://www.instagram.com/melvinmelendrez' },
  ];

  return (
    <div className='action' onClick={handleActionClick}>
      <Image src='/chatMe.png' alt='ChatMe' width={50} height={50} priority />
      <div className='socialImg'>
        {socialNetworks.map((socialNetwork) => (
          <a key={socialNetwork.name} href={socialNetwork.link} target="_blank" style={{ textDecoration: 'none' }}>
            <div className='social-item'>
              <Image src={socialNetwork.icon} alt={socialNetwork.name} width={32} height={32} />
              <span>{socialNetwork.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialButtons;
