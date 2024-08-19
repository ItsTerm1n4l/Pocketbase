/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f9vyxu6cwyhmp0i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "46sq2mqe",
    "name": "info",
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
  const collection = dao.findCollectionByNameOrId("f9vyxu6cwyhmp0i")

  // remove
  collection.schema.removeField("46sq2mqe")

  return dao.saveCollection(collection)
})
