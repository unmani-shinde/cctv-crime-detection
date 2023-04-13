const MyUIComponent = () => {
  const mainDiv = document.createElement('div');
  const heading = document.createElement('h1');
  heading.textContent = 'Hello, world!';
  const paragraph = document.createElement('p');
  paragraph.textContent = 'This is my UI component.';
  mainDiv.appendChild(heading);
  mainDiv.appendChild(paragraph);
  return mainDiv;
};

const homepageDiv = document.getElementById('homepage');
homepageDiv.appendChild(MyUIComponent());
