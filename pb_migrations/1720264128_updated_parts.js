/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f9vyxu6cwyhmp0i")

  collection.name = "test"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f9vyxu6cwyhmp0i")

  collection.name = "parts"

  return dao.saveCollection(collection)
})
