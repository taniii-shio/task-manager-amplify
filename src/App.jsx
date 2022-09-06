import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import Main from "./components/Main";

Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>Task Manager</h1>
      {user ? (
        <>
          <h3>権限持ちユーザー:{user.username}</h3>
          <button onClick={signOut}>サインアウト</button>
        </>
      ) : (
        <h3>権限がありません</h3>
      )}
      <Main />
    </div>
  );
}

export default withAuthenticator(App);
