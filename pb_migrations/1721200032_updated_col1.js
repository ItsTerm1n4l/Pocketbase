/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6okp8mtg83sgz5v")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rmjbh5lv",
    "name": "tags",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "recommended",
        "cheapest",
        "cherry",
        "OEM"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6okp8mtg83sgz5v")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rmjbh5lv",
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
})
