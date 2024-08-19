/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ml6q0iaafkfnnr4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bbjlo1vo",
    "name": "includes",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "beans",
        "morebeans"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ml6q0iaafkfnnr4")

  // remove
  collection.schema.removeField("bbjlo1vo")

  return dao.saveCollection(collection)
})
