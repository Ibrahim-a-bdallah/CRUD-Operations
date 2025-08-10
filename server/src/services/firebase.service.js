import { db } from "../config/firebase.js";
export class FirebaseService {
  constructor(collectionName) {
    this.collectionRef = db.collection(collectionName);
  }

  async getAll() {
    const snapshot = await this.collectionRef.get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  async getById(id) {
    const docSnap = await this.collectionRef.doc(id).get();
    return docSnap.exists ? { id: docSnap.id, ...docSnap.data() } : null;
  }

  async create(data) {
    const docRef = await this.collectionRef.add(data);
    return { id: docRef.id, ...data };
  }

  async update(id, data) {
    await this.collectionRef.doc(id).update(data);
    return { id, ...data };
  }

  async delete(id) {
    await this.collectionRef.doc(id).delete();
    return { id };
  }

  async query(field, operator, value) {
    const snapshot = await this.collectionRef
      .where(field, operator, value)
      .get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
}
