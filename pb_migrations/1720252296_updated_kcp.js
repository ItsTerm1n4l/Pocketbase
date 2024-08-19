/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6okp8mtg83sgz5v")

  collection.name = "col1"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6okp8mtg83sgz5v")

  collection.name = "kcp"

  return dao.saveCollection(collection)
})
