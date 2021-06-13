import React, { useRef } from 'react';
import { Button, TextField } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { upload } from './api'

function Login ({onUpload}) {
  const inputEl = useRef(null);

  const _onSuccess = data => {
    onUpload(data.link)
  }
  const handleUpload = (e) => {
    e.preventDefault();
    console.log(inputEl.current.files[0]);

    upload(inputEl.current.files[0],_onSuccess)
  };
  return (
    <>
      <input ref={inputEl} type='file'/>
      <button type='submit' onClick={handleUpload}>add </button>
    </>
  );
  }
export default Login;
