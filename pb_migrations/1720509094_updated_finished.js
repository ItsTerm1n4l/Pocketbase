/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("35vcqk41ton4fog")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fzqfckwh",
    "name": "h",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("35vcqk41ton4fog")

  // remove
  collection.schema.removeField("fzqfckwh")

  return dao.saveCollection(collection)
})
