import React, { useState } from 'react';
import Image from 'next/image';

const SocialButtons = () => {
  const [timeoutId, setTimeoutId] = useState(null);

  function handleActionClick() {
    const action1 = document.querySelector('.action');
    action1?.classList.toggle('active');

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      action1?.classList.remove('active');
    }, 5000);

    setTimeoutId(newTimeoutId);
  }

  const socialNetworks = [
    { name: 'LinkedIn', icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', link:'https://www.linkedin.com/in/melvinmelendrez/' },
    { name: 'Github', icon: 'https://cdn-icons-png.flaticon.com/512/733/733609.png', link:'https://github.com/MelvinMelendrez' },
    { name: 'Instagram', icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png', link:'https://www.instagram.com/melvinmelendrez' },
  ]

  return (
      <div className='action' onClick={handleActionClick}>
        <Image src='/chatMe.png' alt='ChatMe' width={50} height={50} />
        <ul className='socialImg'>
          {socialNetworks.map((socialNetwork) => (
            <li key={socialNetwork.name}>
              <a href={socialNetwork.link} target="_blank" style={{ textDecoration: 'none' }}>
                <Image src={socialNetwork.icon} alt={socialNetwork.name} width={32} height={32} />
                {socialNetwork.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default SocialButtons;
