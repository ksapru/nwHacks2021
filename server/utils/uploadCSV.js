const fs = require('fs')
const [pgp, db] = require('../db')
const parse = require('csv-parse');
const { RSA_PKCS1_PSS_PADDING } = require('constants');

module.exports = async (tableName, directory) => {

  var count = await db.one("select count(*) from $1~", tableName);
  count = count.count
  console.log(count)
  console.log("count: "+count)
  if(count != 0) {
    // console.log("Already occupied")
    return
  }

  const cols = []
  var rows = []

  var parser = parse({columns: true}, (err, records) => {
    rows = records
    for (const entry of Object.entries(records[0])) {
      cols.push(entry[0])
    }
  });

  var end = new Promise(function(resolve, reject) {
    parser.on('end', () => resolve())
  })

  fs.createReadStream(directory).pipe(parser);

  await end
  
  const cs = new pgp.helpers.ColumnSet(cols, {table: tableName})
  const query = pgp.helpers.insert(rows, cs)
  await db.none(query);

  console.log("Query completed!")
}