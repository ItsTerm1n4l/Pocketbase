/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ml6q0iaafkfnnr4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "st7m4a2a",
    "name": "pid",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ml6q0iaafkfnnr4")

  // remove
  collection.schema.removeField("st7m4a2a")

  return dao.saveCollection(collection)
})
