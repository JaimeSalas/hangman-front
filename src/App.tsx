import React from 'react';
import { 
  retrieveMembersByOrg, 
  randomIntFromInterval
} from './services';

import { CharPlaceholderComponent } from './components';

interface SecretChar {
  char: string;
  show: boolean;
}

function App() {
  const [secret, setSecret] = React.useState('');
  const [secretCharCollection, setSecretCharCollection] = React.useState<SecretChar[]>([]);

  React.useEffect(() => {
    retrieveMembersByOrg('roche')
      .then((members) => {
        const indexValue = randomIntFromInterval(1, members.length) - 1;
        const secretLogin = members[indexValue];
        setSecret(secretLogin);
      });
  }, []);

  React.useEffect(() => {
    if (secret !== ''){
      const t = secret.split('').map((v)=> ({
        char: v,
        show: false
      }));
      setSecretCharCollection(t);
    }
  },[secret]);
  
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        { secretCharCollection.length > 0 && secretCharCollection.map((v, i) => {
          return <CharPlaceholderComponent key={i} char={v.char} show={v.show} />
        })}
      </div>
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <input type="text" />
      </div>
    </>
  );
}

export default App;