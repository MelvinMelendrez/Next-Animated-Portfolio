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

  return (
    <div className='action' onClick={handleActionClick}>
      <Image src='/chatMe.png' alt='LinkedIn' width={50} height={50} />
      <ul>
        <li>
          <Image src='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' alt='LinkedIn' width={32} height={32} />
          LinkedIn
        </li>
        <li> 
          <Image src='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' alt='LinkedIn' width={32} height={32} />
          github</li>
        <li>
        <Image src='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' alt='LinkedIn' width={32} height={32} />
          instagram
        </li>

      </ul>
    </div>
  );
};

export default SocialButtons;
