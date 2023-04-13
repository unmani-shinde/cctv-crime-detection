import React, { useState } from 'react';
import { Web3Storage } from 'web3.storage';
import "./UploadFiles.css";

function getAccessToken() {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDYwNDExN0I5YTkxZjcwMjM0N2Y3ZjhGQWY2ZkFmRTI1ZGJDNWQwOGQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODA2MjkyNzQzNDUsIm5hbWUiOiJ0b2tlbjIifQ.DDc7UuE00-ufOUoZBWUfvWGpTiv62aD254Ka8rVjmQU";
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

function makeFileObjects() {
  const obj = { hello: 'world' };
  const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' });

  const files = [
    new File([blob], 'hello.json'),
  ];
  return files;
}

function UploadFiles() {
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    setLoading(true);
    const files = makeFileObjects();
    try {
      const client = makeStorageClient();
      const cid = await client.put(files);
      console.log('stored files with cid:', cid);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <form>
            <label for="crime-description">Crime Description:</label>
            <textarea id="crime-description" name="crime-description"></textarea>
            
            <label for="location">Location:</label>
            <input type="text" id="location" name="location"></input>
            
            <input type="hidden" id="timestamp" name="timestamp"></input>
            
            <button type="submit">Submit</button>
        </form>

      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Files'}
      </button>
    </div>
  );
}

export default UploadFiles;
