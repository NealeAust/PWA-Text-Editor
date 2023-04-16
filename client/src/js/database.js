import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Export a function using PUT to add content to database
export const putDb = async (content) => {
  console.log('PUT to the database');
  
  // Steps taken to add content include: 
  // Create a connection, set-up a transataction, open-up (access) objectstore in db
  // call add() method, await request, log & return result.
  const jateDb = await openDB('jate', 1);
  const txn = jateDb.transaction('jate', 'readwrite');
  const store = txn.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log('Data saved to the database', result);
};

// Export a function using GEt all to display all content from database
export const getDb = async () => {
  console.log('GET from the database');
  
  // Steps taken to display all content include: 
  // Create a connection, set-up a transataction, open-up (access) objectstore in db
  // call getAll() method, await request, log & return result.
  const jateDb = await openDB('jate', 1);
  const txn = jateDb.transaction('jate', 'readonly');
  const store = txn.objectStore('jate');
  const request= store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result?.value;
};

initdb();
