/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c6uc5dd4yfq3ifb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hqroa4bq",
    "name": "Includes",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "plate",
        "a",
        "spoon",
        "fork"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c6uc5dd4yfq3ifb")

  // remove
  collection.schema.removeField("hqroa4bq")

  return dao.saveCollection(collection)
})
