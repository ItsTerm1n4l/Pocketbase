/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0g4xh0j9h452b9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eq8f7t40",
    "name": "tags",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "recommended",
        "cheapest"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0g4xh0j9h452b9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eq8f7t40",
    "name": "tags",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "recommended",
        "cheapest"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
