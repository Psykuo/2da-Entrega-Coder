import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  where,
  query,
  updateDoc,
  deleteDoc,
  writeBatch,
  increment,
} from "firebase/firestore";
import { db } from "./Config";

const prodsRef = collection(db, "items");

export const getProducts = async (category) => {
  const q = category
    ? query(prodsRef, where("category", "==", category))
    : prodsRef;

  let products = [];
  const querySnapshot = await getDocs(q);
  //forEach es un metodo del retorno de getDocs y no es el de javascript
  querySnapshot.forEach((doc) => {
    products = [...products, { ...doc.data(), id: doc.id }];
  });

  return products;
};

//LEER
export const getProduct = async (id) => {
  const document = doc(db, "items", id);
  const docSnap = await getDoc(document);
  if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };

  return null;
};
//ACTUALIZAR
export const updateProduct = async (id, item) => {
  const newBook = await updateDoc(doc(db, "items", id), item);
  return;
};
//ELIMINAR
export const deleteProduct = async (id) => {
  return await deleteDoc(doc(db, "items", id));
};

//OPERACION EN LOTE
export const updateManyProduct = async ( items ) => {
  const batch = writeBatch(db);
  
  items.forEach(({id, qty})=>{ 
    batch.update(doc(db, "items", id), {
      stock: increment(-qty)
    })
  })

  batch.commit();
}