
/* Add the Profile function here */
import React from 'react';






const Profile = ({name, bio}) =>
{
    return <main id="content" role="main" className="base">
    <h1>{name}'s React Page</h1>
      <p>{bio}</p>
    </main>
}
export default Profile;
