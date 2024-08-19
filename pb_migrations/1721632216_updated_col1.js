/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6okp8mtg83sgz5v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dqrn9mp4",
    "name": "colour",
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
  const collection = dao.findCollectionByNameOrId("6okp8mtg83sgz5v")

  // remove
  collection.schema.removeField("dqrn9mp4")

  return dao.saveCollection(collection)
})
