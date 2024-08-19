/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c6uc5dd4yfq3ifb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ypvcqih6",
    "name": "tags",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "a"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cjemkrld",
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
  const collection = dao.findCollectionByNameOrId("c6uc5dd4yfq3ifb")

  // remove
  collection.schema.removeField("ypvcqih6")

  // remove
  collection.schema.removeField("cjemkrld")

  return dao.saveCollection(collection)
})
