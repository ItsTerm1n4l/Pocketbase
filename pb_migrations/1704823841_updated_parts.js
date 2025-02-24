/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f9vyxu6cwyhmp0i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zedgkzwq",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "a4tuc379z15gmkg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f9vyxu6cwyhmp0i")

  // remove
  collection.schema.removeField("zedgkzwq")

  return dao.saveCollection(collection)
})
