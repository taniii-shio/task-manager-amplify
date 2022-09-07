import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import Main from "./components/Main";

Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className="app-wrapper">
      <div className="app-title-wrapper">
        <h1 className="app-title">Task Manager</h1>
        {user ? (
          <>
            <h3 className="app-username">user : {user.username}</h3>
            <button className="app-signout" onClick={signOut}>
              SignOut
            </button>
          </>
        ) : (
          <h3>権限がありません</h3>
        )}
      </div>
      <Main />
    </div>
  );
}

export default withAuthenticator(App);
