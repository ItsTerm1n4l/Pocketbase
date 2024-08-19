/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6okp8mtg83sgz5v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m0lgd7ia",
    "name": "pcbprice",
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
  const collection = dao.findCollectionByNameOrId("6okp8mtg83sgz5v")

  // remove
  collection.schema.removeField("m0lgd7ia")

  return dao.saveCollection(collection)
})
