export const fetchData = () => {
  return fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
    return res.json();
  });
};
