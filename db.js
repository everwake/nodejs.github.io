
var mongodb =require('mongodb')
var lastMsg = [];
module.exports.lastMessage = lastMsg;

module.exports.DbConnection = function(data){
    mongodb.MongoClient.connect("mongodb://localhost:27017/chat",(err,client) => {
    if (err) {
        return console.log(`connection error is: ${err}`)
    }
    console.log(`connected to mongoDb server`)
    var db = client.db('chat')

    ///// FIND and Update /////
    db.collection("user").findOne({user: data.username}).then((result) => {
        // console.log(JSON.stringify(result, undefined, 2))
        // console.log(result)
        if (result == null) {
            db.collection("user").insertOne({
                user: data.username,
                text: [data.message]
            })
        }
        else{
            if (result.text[9] != null) {
                db.collection("user").update({"user": data.username}, {$pop: {"text":-1}}).then()
                
            }
            db.collection("user").update({"user": data.username}, {$push: {"text": data.message}}).then()
            
        }
        ////// show last 10 msg ///////
        module.exports.finalMsg = function () {
            result.text.forEach(element => {
                console.log(`${element}`)
            });
        }

        ////// show last 10 msg ///////
        // lastMsg = [];
        // result.text.forEach(element => {
        //     lastMsg.push(element);
        // });
        
    })

    ////// INSERT /////
    // db.collection("user").insertOne({
    //         user: "sajjad",
    //         text: ["teeeeeeeeeeest", data.username]
    //     },(err,result) => {
    //         console.log(JSON.stringify(result, undefined, 2));
    // })
})
}
    ////// FIND AND REPLACE ///// kamel Document sajjad ro pak kard va ye Document sakht
    // db.collection("saj").findOneAndReplace({"user":"sajjad"},{"user":"sadra"});


    ////// FIND /////
    // db.collection("saj").find({"user":"sadra"}).toArray().then((result) => {
    //     // var ss = JSON.parse(result);
    //     // console.log(typeof ss)
    //     var ss = result;
    //     console.log(JSON.stringify(result, undefined, 2))
    //     // console.log(ss[0].text[2])
    //     // console.log((result.user))
    //     // console.log(JSON.stringify(result.user))
    // })

    //db.collection("saj").remove({"user":"sadra"},{"text.0":"hi"})

    //db.collection("saj").find({"user":"sadra"}).del

    ////// UPDATE ///////////
    // db.collection("saj").updateOne({"user":"sajjad"},{$set:{"user":"sadra"}}).then((result) => {
    //     // var ss = JSON.parse(result);
    //     // console.log(typeof ss)
    //     var ss = result;
    //     console.log(JSON.stringify(result, undefined, 2))
    //     console.log(ss)
    //     // console.log((result.user))
    //     // console.log(JSON.stringify(result.user))
    // })

    ////// UPDATE ARRAY ///////////
    // db.collection("saj").update({"user":"sadra"},{ $push: { "text": "4" }}).then((result) => {
        
    //     var ss = result;
    //     console.log(JSON.stringify(result, undefined, 2))
    //     console.log(ss)
        
    // })
    

    // myObj = { "name":"John", "age":30, "car":null };
    // console.log(myObj.name)






/*var mongodb = require("mongodb").MongoClient;
let db;
const connectionString ="mongodb://localhost:27017/chat";

 function connecting() {
    mongodb.connect(connectionString,(err,client) => {
        if (err) {
            return console.log('unable to connect mongoDb');
        }
        console.log('connect to mongoDb');
        db = client.db('chat');
    
        db.collection('Todos').insertOne({
            'text':'somthing to do',
            completed: false
        },(err,result) => {
            if (err) {
                return console.log('unable to connect mongoDb');
            }
            console.log(JSON.stringify(result));
        }); 
        
    
        client.close();
    });
}

connecting();
print(db);

async function print(dataBase) {
    return await console.log(dataBase);
}
*/


// Promise.resolve(connecting(db)).then((dataa) => {
//     console.log(dataa)
// })



// function print(db){
//     db.then((db) => {
//         console.log(db)
//     })
// }

// connecting(db)
// .then((data) => {
//     console.log(data);
// })



// export async function getData() {
//     db.collection('user').findOne({name: "sajjad"}).then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

// connectToDb();
// print();


