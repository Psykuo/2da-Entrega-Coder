import { addDoc, collection } from 'firebase/firestore';
import {db} from './Config';

const ordersRef = collection(db, 'orders');

export const addOrder = async (order) => {
    const orderDoc = await addDoc(ordersRef, order);

    return orderDoc.id;
}