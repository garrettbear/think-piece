## Notes for things Steve does on Firebase that can't be seen in the repo

### Video 9

- [ ] Enable Database (Start in Test Mode)

### Video 13

- [ ] Statically add a collection from the Firebase Console
- [ ] Collection ID: posts - (just let it AUTO ID)
- [ ] Field: title Type: string Value: Some random text
- [ ] Field: content Type: string Value: Some more random text
- [ ] Field: user Type: map
- Map Item 1: Field: uid Type: string Value: 123
- Map Item 2: Field: displayName Type: string Value: NameNameName

### Video 17

- [ ] (front end) Delete all the posts - 1 should remain due to id
- [ ] Delete the ID field on the last post that remains

### Video 22

- [ ] Set up sign in method
- [ ] Enable Google
- [ ] Enable Email/Password

## Video 29

- [ ] Rules for Database

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read;
      allow create: if request.auth.uid != null && request.resource.data.title != null;
      allow update, delete: if request.auth.uid == resource.data.user.uid;
    }
  }
}

```

- [ ] Delete collection in Database to clean up all the posts
