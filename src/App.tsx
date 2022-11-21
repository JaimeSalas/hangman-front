import React from 'react';
import { 
  retrieveMembersByOrg, 
  // loginLength,
  randomIntFromInterval
} from './services';

import { CharPlaceholderComponent } from './components';

function App() {
  const [secret, setSecret] = React.useState('');
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    retrieveMembersByOrg('roche')
      .then((members) => {
        const indexValue = randomIntFromInterval(1, members.length) - 1;
        const secretLogin = members[indexValue];
        setSecret(secretLogin);
      });
  }, []);

  React.useEffect(() => {
    const identifier = setTimeout(() => {
      setShow(true);
    }, 3_000);

    return () => clearTimeout(identifier);
  });
  
  return (
    <div>
      { secret !== '' && secret.split('').map((v, i) => {
        return <CharPlaceholderComponent key={i} char={v} show={show} />
      }) }
    </div>
  );
}

export default App;
