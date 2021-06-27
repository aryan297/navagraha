import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Policy,Feedback } from 'src/app/policy.model';
import { Observable } from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  policy: Observable<Policy[]>;
  feedback:Observable<Feedback[]>
  userscollection: AngularFirestoreCollection<Policy>;  
  userDoc: AngularFirestoreDocument<Policy>; 
  feedcollection: AngularFirestoreCollection<Feedback>;  
  feedDoc: AngularFirestoreDocument<Feedback>; 

  constructor(private firestore: AngularFirestore) {
 
    this.userscollection = this.firestore.collection('policies', x => x.orderBy('Name', 'asc'));  
    this.policy= this.userscollection.snapshotChanges().pipe(map(  
      changes => {  
        return changes.map(  
          a => {  
            const data = a.payload.doc.data() as Policy;  
            return data;  
          });  
      })); 

      this.feedcollection = this.firestore.collection('feedback', x => x.orderBy('Name', 'asc'));  
      this.feedback= this.feedcollection.snapshotChanges().pipe(map(  
        changes => {  
          return changes.map(  
            a => {  
              const data = a.payload.doc.data() as Feedback;  
              return data;  
            });  
        })); 
   }
        getPolicies() {
          return this.policy
          }

        getFeedback(){
          return this.feedback
        }

getAdmin() {
  return this.firestore.collection('admin').snapshotChanges();
}
createPolicy(policy: Policy){
  return this.firestore.collection('policies').add(policy);
}

createFeedback(Feedback:Feedback){
  return this.firestore.collection('feedback').add(Feedback);
}

deletePolicy(policyId: string){
  this.firestore.doc('policies/' + policyId).delete();
}
}

