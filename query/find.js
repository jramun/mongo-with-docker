//Regex
db.recipes.find({title: {$regex: "Chicken"}}, {title: 1});
//Count
db.recipes.find().count();
//Limit
db.recipes.find().limit(3);
//Skip
db.recipes.find().skip(1);
//Sort
db.recipes.find().sort({calories_per_serving: 1});
db.recipes.find().sort({calories_per_serving: -1});
//Lte
db.recipes.find({cook_time: {$lte: 30}}, {title: 1, cook_time: 1});
//Find with array
db.recipes.find({tags: "easy"}, {title: 1, tags: 1});
db.recipes.find({tags: {$all: ["easy", "quick"]}}, {title: 1, tags: 1});
//Nested object
db.recipes.find({"ingredients.name": "egg"}, {title: 1, tags: 1, "ingredients.name": 1});
//Equal
db.recipes.find({title: {$eq: "This record is updated by me!"}});
//Pretty format
db.recipes.find({}, {title: 1}).pretty();
db.recipes.find({title: "This record is updated by me!"}, {title: 1, likes: 1})
//Find by id
db.recipes.find({_id: ObjectId("5e5e9c470d33e9e8e3891b35")});
db.recipes.find({}, {title: 1}).sort({rating_avg: -1}).limit(4);