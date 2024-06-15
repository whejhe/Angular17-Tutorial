import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-firebase',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './firebase.component.html',
  styleUrl: './firebase.component.css'
})
export class FirebaseComponent {

  scrollTo(name: string) {
    const element = document.querySelector(name);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  installAngular: string = `npm install -g @angular/cli`;
  installfirebase: string = `npm install firebase @angular/fire`;
  iniciarFirebase: string = `// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    // Tus componentes aquí
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [/* Componente principal aquí */]
})
export class AppModule { }`;
;

  servicioDeAutenticacion: string = `// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.signOut();
  }

  getUser() {
    return this.afAuth.authState;
  }
}`;

servicioFirestore:string = `// src/app/services/firestore.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  createDoc(data: any, path: string, id: string) {
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
  }

  getDoc(path: string, id: string) {
    const collection = this.firestore.collection(path);
    return collection.doc(id).valueChanges();
  }

  deleteDoc(path: string, id: string) {
    const collection = this.firestore.collection(path);
    return collection.doc(id).delete();
  }
}`

firestoreEnComponente: string = `// src/app/components/item/item.component.ts
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  item: any;

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.firestoreService.getDoc('items', 'itemID').subscribe(data => {
      this.item = data;
    });
  }
}`


servicioStorage:string = `// src/app/services/storage.service.ts
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: AngularFireStorage) {}

  uploadFile(filePath: string, file: any) {
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    return task.snapshotChanges().pipe(
      finalize(() => ref.getDownloadURL())
    );
  }

  deleteFile(filePath: string) {
    const ref = this.storage.ref(filePath);
    return ref.delete();
  }
}`

storageComponente:string = `// src/app/components/upload/upload.component.ts
import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html'
})
export class UploadComponent {
  constructor(private storageService: StorageService) {}

  upload(event: any) {
    const file = event.target.files[0];
    const filePath = uploads{file.name};
    this.storageService.uploadFile(filePath, file).subscribe(url => {
      console.log('File uploaded successfully!', url);
    });
  }
}`

envirotment:string = `export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  }
}`

}
