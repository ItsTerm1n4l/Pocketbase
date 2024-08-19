/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0g4xh0j9h452b9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s8uzrmpx",
    "name": "instock",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0g4xh0j9h452b9")

  // remove
  collection.schema.removeField("s8uzrmpx")

  return dao.saveCollection(collection)
})
