import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [message, setMessage] = useState('Nothing was pressed yet');
  const handleClick = (event: KeyboardEvent) => {
    setMessage(`The last pressed key is [${event.key}]`);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleClick);

    return () => document.removeEventListener('keyup', handleClick);
  }, []);

  return (
    <div className="App">
      <p className="App__message">{message}</p>
    </div>
  );
};
