const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true });


// const fruitSchema= new mongoose.Schema({
//     name: String,
//     rating: Number,
//     review: String
// });
//data validation
const fruitSchema= new mongoose.Schema({
    name: {
        type:String,
        required:[true, "no name specified"]
    },
        rating: {
        type: Number,
        min:1,
        max:10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name:"Apple",
    rating: 8,
    review: "Solid as a fruit"
});
 
  //fruit.save();
 
const personSchema= new mongoose.Schema({
    name:String,
    age: Number,
    favFruit: fruitSchema

});
const Person = mongoose.model("Person", personSchema);
const person=new Person({
    name:"John",
    age:37
});
//person.save();

//add multiple fruits at a time
//  const kiwi = new Fruit({
//     name:"Kiwi",
//     rating: 10,
//     review:"best fruit"
//  });
//  const orange = new Fruit({
//     name:"Orange",
//     rating: 5,
//     review:"sour fruit"
//  });
//  const banana = new Fruit({
//     name:"Banana",
//     rating: 7,
//     review:"good fruit"
//  });
//  Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
//  });

 //read from db
 Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }
    else{

        mongoose.connection.close();
        //console.log(fruits);

        //printing names of fruits
 fruits.forEach(function(fruit) {
    console.log(fruit.name);
 });

    }
 });
 
//updating 
//conditions, doc, options(optional), callback

//})

//delete one
// Fruit.deleteOne({_id:"63f58e115e7bb3e0f444da9b"}, function(err){
//     if(err)
//     console.log(err);
//     else
//     console.log("Delete successful");
// });

//delete many

// Fruit.deleteMany({name:["Kiwi","Orange","Banana","Peach","Apple"]}, function(err){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Deleted all");
//     }
// });

//relationships

const strawberry = new Fruit({
    name:"Strawberry",
    rating:9,
    review:"Great fruit"
});
strawberry.save();

// const newperson=new Person({
//     name:"Amy",
//     age:37,
//     favFruit: pineapple
// });
// newperson.save();

// Person.updateOne( {name:"John"},{favFruit:strawberry}, function(err){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Successfully updated the document");
//     }
// });

