/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ml6q0iaafkfnnr4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dfp70qwz",
    "name": "tags",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "1",
        "2",
        "3"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ml6q0iaafkfnnr4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dfp70qwz",
    "name": "num",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "1",
        "2",
        "3"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
