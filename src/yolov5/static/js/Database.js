
const form = document.getElementById('upload-form');
const locationInput = document.getElementById('location-input');
const descriptionInput = document.getElementById('description-input');

function getAccessToken() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDYwNDExN0I5YTkxZjcwMjM0N2Y3ZjhGQWY2ZkFmRTI1ZGJDNWQwOGQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODA2MjkyNzQzNDUsIm5hbWUiOiJ0b2tlbjIifQ.DDc7UuE00-ufOUoZBWUfvWGpTiv62aD254Ka8rVjmQU";
  }
  
  function makeStorageClient() {
    const { Web3Storage } = require('web3.storage');
    return new Web3Storage({ token: getAccessToken() });
  }
  
  function makeFileObjects() {
    const obj = { location: locationInput, description:descriptionInput };
    const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' });
  
    const files = [
      new File([blob], 'hello.json'),
    ];
    return files;
  }
  
  const uploadBtn = document.getElementById("upload-btn");
  
  uploadBtn.addEventListener("click", async function(event) {
    event.preventDefault();
      uploadBtn.disabled = true;
      uploadBtn.textContent = "Uploading...";
  
      const files = makeFileObjects();
      try {
          const client = makeStorageClient();
          const cid = await client.put(files);
          console.log('stored files with cid:', cid);
      } catch (error) {
          console.error(error);
      } finally {
          uploadBtn.disabled = false;
          uploadBtn.textContent = "Upload Files";
      }
  });
  