/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "35vcqk41ton4fog",
    "created": "2024-05-23 18:21:17.275Z",
    "updated": "2024-05-23 18:21:17.275Z",
    "name": "finished",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xnbzuok9",
        "name": "field",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "ml6q0iaafkfnnr4",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("35vcqk41ton4fog");

  return dao.deleteCollection(collection);
})
