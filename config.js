/*
  Firebase の設定
  Firebaseコンソール → プロジェクトの設定（歯車）→「マイアプリ」→ ウェブアプリ →「SDK の設定と構成」→「構成」
  に表示される firebaseConfig の中身を、下の null の代わりに貼り付けます。

  例:
  window.FIREBASE_CONFIG = {
    apiKey: "AIza...",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef"
  };

  null のままだと、記録はその端末だけに保存され、速報の配信はできません。
*/
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyA0_71-0i0JEirsIgWW3lnGFED-SMq0C8E",
  authDomain: "pocket-scorer-1085f.firebaseapp.com",
  projectId: "pocket-scorer-1085f",
  storageBucket: "pocket-scorer-1085f.firebasestorage.app",
  messagingSenderId: "745264707208",
  appId: "1:745264707208:web:8e14931ef76d4296c4113d",
  measurementId: "G-DRHVSDXD7H"
};
