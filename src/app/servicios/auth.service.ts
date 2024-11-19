import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { Auth, authState, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut,UserCredential  } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private firestoreService: FirestoreService, private auth: Auth) {
    this.auth.languageCode = 'es';    
  }

  async createUser(clienteData: any, email: string, password: string) {
    try {
      console.log("aca");
      const userCredential: UserCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log("aca");
      const clienteId = await this.firestoreService.createDocument(`usuarios`, { ...clienteData }, userCredential.user.uid);
      console.log("tercer");
      console.log('Cliente agregado a Firestore con ID:', clienteId);
      return userCredential;
    } catch (error) {
      console.error('Error al crear usuario o agregarlo a Firestore:', error);
      throw error;
    }
  }
  getCurrentUser() {
    return this.auth.currentUser
  }

  async login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async logout(reload = true) {
    await signOut(this.auth);
  }
}
