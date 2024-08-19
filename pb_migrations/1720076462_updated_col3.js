/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("23ca6prveuemdc9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4eolusmg",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rncy61ar",
    "name": "includes",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "values": [
        "plate",
        "pcb",
        "weight",
        "rest"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("23ca6prveuemdc9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4eolusmg",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rncy61ar",
    "name": "includes",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "plate",
        "pcb",
        "weight",
        "rest"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
