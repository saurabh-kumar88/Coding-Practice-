/** Rule1: if the function is a part of object i.e method --> obj (then 'this' will points to object itself)
Rule2: if it is a normal function (i.e not part of a object) ---> then 'this' will reference to global 
object("window" in browser and "global" in node )*/


const video = {
  title : "Jsutice league",
  heroes: ['Diana', 'Bruce', 'Clark'],
  showTags(){
    this.heroes.forEach(function(name){
      console.log(this.title +" "+ name);
    }, this);
  },
}

// video.showTags();

class EventClass {

	constructor(x, y){
		this.x = "foo"
		this.y = "bar"
	}

	display_info()
	{
	  // console.log(this.x +" "+ this.y)
	  console.log(this)
	}

}

obj = new EventClass()
obj.display_info()

