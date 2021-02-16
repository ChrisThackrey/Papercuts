import React, { useState, useRef } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { firebaseStorage } from '../../../Docs/firebase-config/firebase'; // make sure import the right path.

export default function CreateBookClub({ user }) {
  const [formData, setFormData] = useState({});
  const fileRef1 = useRef();
  const fileRef2 = useRef();
  const handleSubmit = () => {
    const storageRef1 = firebaseStorage.ref(fileRef1.current.files[0].name);
    const storageRef2 = firebaseStorage.ref(fileRef2.current.files[0].name);
    Promise.all([
      storageRef1.put(fileRef1.current.files[0]).then((snapShot) => snapShot.ref.getDownloadURL()),
      storageRef2.put(fileRef2.current.files[0]).then((snapShot) => snapShot.ref.getDownloadURL()),
    ]).then((urls) => {
      console.log(urls);
      console.log(formData);
      console.log(user);
      return axios.post('/bookclub', {
        ...formData,
        owner: user._id,
        smallThumbnail: urls[0],
        thumbnail: urls[1],
      });
    });
  };

  return (
    <Container>
      <h1>Create a Book Club</h1>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type='input'
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type='textarea'
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Small Thumbnail</Form.Label>
          <Form.Control required type='file' name='smallThumbnail' ref={fileRef1} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Thumbnail</Form.Label>
          <Form.Control required type='file' name='thumbnail' ref={fileRef2} />
        </Form.Group>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}
