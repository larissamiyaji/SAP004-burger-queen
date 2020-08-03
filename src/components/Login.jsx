import React, { useState } from "react";
// import firebase from "../firebase";
// import { database } from "firebase";
import { firebaseAuth } from "../firebase";
import { urls } from "../Routes";
import { firebaseStore } from "../firebase";
import { useHistory } from "react-router-dom"
import "../App.css";
import Input from "./Input";
import Button from "./Button";
import InfoBox from "./InfoBox"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //  const [userName, setUserName] = useState("");
  //  const [userId, setUserId] = useState("");

  const history = useHistory();
  // const handleAuth = () => {
  //   firebaseAuth.onAuthStateChanged((user) =>{
  //     if(user !== null){
  //       return true;
  //     }else{
  //       return false;
  //     }
  //   });
  // };

  function handleLogin() {
    const userId = firebaseAuth.currentUser.uid;
    firebaseStore
      .collection('users')
      .doc(userId)
      .get()
      .then((doc) => {
        if (doc.data().occupation === 'Salão') {
          history.push(urls.hall.path);
        } else {
          history.push(urls.kitchen.path);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
      console.log("User uid:", userId)
  }
  function handleClick(e) {
    e.preventDefault();
    signIn(email, password);
  }

  function signIn(email, password) {
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        handleLogin();
        // console.log(firebase.auth().currentUser.uid);
        console.log("LOGOU");
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }
  
  return (
    <div className="login">
      <h2 className="sub-title">Login</h2>
      <form className="form-box">
        <Input
          type="text"
          id="input-email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />
        <Input
          type="password"
          id="input-password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />

        <Button onClick={handleClick} name="Entrar" />
        <p className="p-bottom">
          Ainda não possui conta? <a href="/Register">Cadastre-se</a>
        </p>
      </form>
      <InfoBox />
    </div>
  );
}

export default Login;

// import React, { useState } from "react";
// import "../App.css";
// import Input from "./input";
// import Button from "./Button";
// import { database } from "firebase";
// import { useHistory } from "react-router-dom";
// import { firebaseAuth } from "../firebase";
// import { urls } from "../Routes";

// const Login = () => {
//   const history = useHistory();
//   const [user, setUser] = useState({ email: "", password: "", occupation: "" });

//   const handleClick = () => {
//     firebaseAuth
//       .signInWithEmailAndPassword(user.email, user.password, user.occupation)
//       .then((credential) => {
//         database
//           .collection("users")
//           .doc(credential.user.userId)
//           .get()
//           .then((querySnapshot) => {
//             if (querySnapshot.data().occupation === "Cozinha") {
//               history.push(urls.kitchen.path);
//             } else {
//               history.push(urls.hall.path);
//             }
//           });
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//     console.log(handleClick);
//   };

//   return (
//     <div className="login">
//       <h2 className="sub-title">Login</h2>
//       <form className="form-box">
//           <Input
//             type="email"
//             id="input-email"
//             placeholder="Digite o e-mail"
//             value={user.email}
//             onChange={(e) => {
//               setUser((state) => ({ ...state, email: e.target.value }));
//               e.persist();
//             }}
//             className="input"
//           />
//           <Input
//             type="password"
//             id="input-password"
//             placeholder="Digite uma senha"
//             value={user.password}
//             onChange={(e) => {
//               setUser((state) => ({ ...state, password: e.target.value }));
//               e.persist();
//             }}
//           />
//         <Button onClick={handleClick} name="Entrar" type="submit" />
//         <p className="p-bottom">
//           Ainda não possui conta? <a href="/Register">Cadastre-se</a>
//         </p>
//       </form>
//     </div>
//   );
// };
// export default Login;
