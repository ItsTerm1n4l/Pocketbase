/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0g4xh0j9h452b9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yia06fwz",
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
  const collection = dao.findCollectionByNameOrId("i0g4xh0j9h452b9")

  // remove
  collection.schema.removeField("yia06fwz")

  return dao.saveCollection(collection)
})
