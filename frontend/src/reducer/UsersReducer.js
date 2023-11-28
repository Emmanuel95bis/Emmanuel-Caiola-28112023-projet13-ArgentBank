import { createSlice } from "@reduxjs/toolkit";
import data2 from "../datas/datas2.json";

//création de l'initialState
const initialState = {
  // le statut permet de suivre l'état de la requête
  status: "void",
  // les données lorsque la requête a fonctionné
  data: [],
  // l'erreur lorsque la requête échoue
  error: null,
};

// création de la fonction asynchrone de récupération de données
export const fetchUser = () => async (dispatch, getState) => {
  //Utilisation de getstate pour récupérer le status du store
  const status = getState().user.status;

  console.log(status);
  if (status === "pending" || status === "updating") {
    // on stop la fonction pour éviter de récupérer plusieurs fois la même donnée
    return;
  }

  // appel action créator "fetching" pour modifier le status
  dispatch(actions.fetching());

  console.log(status);

  try {
    // on utilise fetch pour faire la requête
    //const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log("333333ééééééééééé");

    const response = await fetch(data2);

    console.log("33333333333");
    const data = await response.json();
    console.log(data);
    // appel action créator "resolved" pour modifier le status et sauvegarde des données
    dispatch(actions.resolved(data));
  } catch (error) {
    dispatch(actions.rejected(error));
  }
};

const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    // fetching action & reducer
    fetching: (draft) => {
      if (draft.status === "void") {
        // on passe en pending
        draft.status = "pending";
        return;
      }
      // si le statut est rejected
      if (draft.status === "rejected") {
        // on supprime l'erreur et on passe en pending
        draft.error = null;
        draft.status = "pending";
        return;
      }
      // si le statut est resolved
      if (draft.status === "resolved") {
        // on passe en updating (requête en cours mais des données sont déjà présentent)
        draft.status = "updating";
        return;
      }
      // sinon l'action est ignorée
      return;
    },
    // resolved action & reducer
    resolved: (draft, action) => {
      // si la requête est en cours
      if (draft.status === "pending" || draft.status === "updating") {
        // on passe en resolved et on sauvegarde les données
        draft.data = action.payload;
        draft.status = "resolved";
        return;
      }
      // sinon l'action est ignorée
      return;
    },
    // rejected action & reducer
    rejected: (draft, action) => {
      // si la requête est en cours
      if (draft.status === "pending" || draft.status === "updating") {
        // on passe en rejected, on sauvegarde l'erreur et on supprime les données
        draft.status = "rejected";
        draft.error = action.payload;
        draft.data = null;
        return;
      }
      // sinon l'action est ignorée
      return;
    },
  },
});

export default reducer;
