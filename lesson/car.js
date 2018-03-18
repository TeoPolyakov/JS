// var dog = {
//     name:"Fido",
//     breed:"Mixed",
//     weight:38
// };


function Dog(name,breed, weight){
    this.name=name;
    this.breed=breed;
    this.weight=weight;
}




var fido=new Dog("Fluffy", "Poodle", 30);
var spot=new Dog("Spot", "Chihuahua",10);
var dogs=[fido,spot];
for (var i=0;i<dogs.length;i++){
    var size="small";
    if (dogs[i].weight>10){
        size="large";

    }
    console.log("Dog:"+dogs[i].name+" breed:"+dogs[i].breed+" weight:"+dogs[i].weight+" size:"+size);
}