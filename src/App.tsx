import React from 'react';
import { 
  retrieveMembersByOrg, 
  loginLength,
  randomIntFromInterval
} from './services';

// props
// state

function App() {

  React.useEffect(() => {
    retrieveMembersByOrg('roche')
      .then((members) => {
        const indexValue = randomIntFromInterval(1, members.length) - 1;
        const secretLogin = members[indexValue];
        const secretLoginLength = loginLength(secretLogin);
        console.log(secretLogin, secretLoginLength);
      });
  });
  
  return (
    <div>
    </div>
  );
}

export default App;
