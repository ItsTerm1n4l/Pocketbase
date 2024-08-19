/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qkc2cqpresx859z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "solceqn0",
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
  const collection = dao.findCollectionByNameOrId("qkc2cqpresx859z")

  // remove
  collection.schema.removeField("solceqn0")

  return dao.saveCollection(collection)
})
