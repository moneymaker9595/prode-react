import { getAll, getById, store } from "./../firebaseService";
import { firebaseFolder } from "../firebaseFolders";
import { resultadosconverter } from "../../utils/resultadosConverter";

export const getAllProdesUsuarios = async () => {
  try {
    const prodesFromFirebase = await getAll(firebaseFolder.PRODES);
    const prodes = prodesFromFirebase.map((prodeFromFirestore) => ({
      ...prodeFromFirestore,
      resultados: resultadosconverter.toObject(prodeFromFirestore),
    }));

    return prodes;
  } catch (e) {
    throw e;
  }
};

export const getprodeporid = async (uid) => {
  try {
    const prodeFromFirestore = await getById(uid, firebaseFolder.PRODES);
    const prode = {
      ...prodeFromFirestore,
      resultados: resultadosconverter.toObject(prodeFromFirestore.resultados),
    };
    return prode;
  } catch (e) {
    throw e;
  }
};

export const storeUserProde = async (uid, prode) => {
  try {
    console.log("fireprode", prode.resultados);
    const prodeMapeado = {
      ...prode,
      resultados: resultadosconverter.toFirestore(prode.resultados),
    };
    console.log(prodeMapeado);
    return await store(uid, firebaseFolder.PRODES, prodeMapeado);
  } catch (e) {
    throw e;
  }
};
