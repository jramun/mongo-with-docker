db.recipes.updateOne({title: "Tacos"}, {$set: {"title": "This record is updated by me!"}});
db.recipes.updateOne({title: "This record is updated by me!"}, {$push: {likes: 0}});
db.recipes.updateOne({title: "This record is updated by me!"}, {$pull: {likes: 415}});