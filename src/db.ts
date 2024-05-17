import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(':memory:');

export const initDb = () => {
  db.serialize(() => {
    db.run('CREATE TABLE example (info TEXT)');

    const stmt = db.prepare('INSERT INTO example VALUES (?)');
    for (let i = 0; i < 10; i++) {
      stmt.run('Ipsum ' + i);
    }
    stmt.finalize();
  });
};
export default db;
