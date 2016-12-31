import React from 'react';
import { Link } from 'react-router';

function Home() {
  const repoReadmeLink = 'https://github.com/feruzm/envision#readme';

  return (
    <div>
      <p>
        This is not production ready app!
      </p>
      <p>
        Please see the <a href={repoReadmeLink}>repo readme</a> for
        instructions.
      </p>
      <div><Link to="/example">Detail page</Link></div>
    </div>
  );
}

export default Home;
