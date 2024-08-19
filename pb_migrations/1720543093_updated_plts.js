/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qkc2cqpresx859z")

  collection.name = "col3"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qkc2cqpresx859z")

  collection.name = "plts"

  return dao.saveCollection(collection)
})
