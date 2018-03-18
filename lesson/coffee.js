function Coffee(roast,ounces){
    this.roast=roast;
    this.ounces=ounces;
    this.getSize=function(){
        if (this.ounces===8){
            return "small";
        }else if(this.ounces===12){
            return "medium";
        }else{
            return "large";
        }
    };
    this.toString=function(){
        return "You'are ordered a "+this.getSize()+" "+this.roast+" coffee";
    };
}


var object1=new Coffee("House Blend",12);
console.log(object1.toString());
var object2=new Coffee("Dark Roast",16);
console.log(object2.toString());