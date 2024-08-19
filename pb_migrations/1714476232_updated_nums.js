/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ml6q0iaafkfnnr4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "deu9cuxa",
    "name": "field",
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
  const collection = dao.findCollectionByNameOrId("ml6q0iaafkfnnr4")

  // remove
  collection.schema.removeField("deu9cuxa")

  return dao.saveCollection(collection)
})
