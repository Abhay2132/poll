import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getFirestore, collection, getDocs, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBvJh1Dkx6EbEEMV4TJ2ZMV1TmAlAHXbbE",
  authDomain: "sololearn-abhay.firebaseapp.com",
  projectId: "sololearn-abhay",
  storageBucket: "sololearn-abhay.appspot.com",
  messagingSenderId: "1071644690524",
  appId: "1:1071644690524:web:0a9a952c138afe13eefe99",
  measurementId: "G-92T96BNTS5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function postVote({ name, ans }) {
  const questions = collection(db, 'Voting-poll');
  const qsSnapshot = await getDocs(questions);
  //console.log({qsSnapshot , docs : qsSnapshot.docs})
  var qdata = qsSnapshot.docs.map(doc => doc.data());
  var qdata = dataSanatilzer({ name, ans, data: qdata[0] });

  if (qdata.error) return new Error(qdata.error)

  await setDoc(doc(db, "Voting-poll", "Q1"), qdata);
  return {
    a1: qdata.Answers.a1.length,
    a2: qdata.Answers.a2.length,
    a3: qdata.Answers.a3.length,
    a4: qdata.Answers.a4.length
  }
};

function dataSanatilzer({ name, ans, data }) {
  /*
    0. Validate 'name' and 'ans'
    1. Check for option exists or not
    2. Remove user from submit answer
  */

  if (!data.Answers.hasOwnProperty(ans)) return { error: `Answer '${ans}' doesn't exists in '${Object.keys(data.Answers)}'` };

  for (let an in data.Answers) {
    var users = [];
    for (let user of data.Answers[an]) {
      if (user != name) users.push(user);
    }
    data.Answers[an] = users;
  } 

  data.Answers[ans].push(name)
  return data;
}

export { postVote };