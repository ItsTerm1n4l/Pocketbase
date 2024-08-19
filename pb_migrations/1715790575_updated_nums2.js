/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c6uc5dd4yfq3ifb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xtqonv50",
    "name": "count",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c6uc5dd4yfq3ifb")

  // remove
  collection.schema.removeField("xtqonv50")

  return dao.saveCollection(collection)
})
