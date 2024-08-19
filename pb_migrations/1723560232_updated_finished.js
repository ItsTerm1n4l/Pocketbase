/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("35vcqk41ton4fog")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7iv0gqqm",
    "name": "email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("35vcqk41ton4fog")

  // remove
  collection.schema.removeField("7iv0gqqm")

  return dao.saveCollection(collection)
})
