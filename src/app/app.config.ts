import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"pplaboratorio4","appId":"1:145294707061:web:b84d9338d9178f07116b3c","storageBucket":"pplaboratorio4.firebasestorage.app","apiKey":"AIzaSyCJwNDuJE4lEq-XwICdi1usU2TPUefeyWk","authDomain":"pplaboratorio4.firebaseapp.com","messagingSenderId":"145294707061"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
