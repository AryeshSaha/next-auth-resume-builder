"use server";

import { db } from "@/config/firebase.config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function mutateRole(userId) {
  const userRef = doc(db, "users", userId);
  try {
    const docSnap = await getDoc(userRef);
    const user = docSnap.data();
    if (user) await updateDoc(userRef, { isAdmin: !user.isAdmin });
    else throw new Error("No such user!");
  } catch (error) {
    console.log(error.message);
  }
}
