const fs = require('fs')
const pool = require('../db')
const parse = require('csv-parse')

module.exports = async (tableName, directory) => {
  
  var parser = parse({columns: true}, (err, records) => {
    console.log(records)
  });

  fs.createReadStream(directory).pipe(parser);

  const count = 0
  // const count = await pool.query("select count(*) from $1", [tableName]);

  if( count == 0) {
    

    
    // pool.query("")
  }
}