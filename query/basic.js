//Explain
db.recipes.find({title: "Tacos"}, {title: 1}).explain("executionStats");
//Index
db.recipes.getIndexes();
db.recipes.createIndex({cook_time: 1});