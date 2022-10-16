function Actor(fullname, age,image){
    this.fullname = fullname;
    this.age = age;
    this.image = image;
}
let BradPitt = new Actor("Brad Pitt",47,"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY3MDUxMjkzMjI1OTIwMTcz/brad-pitt-attends-the-premiere-of-20th-century-foxs--square.jpg");
let RobertJr = new Actor("Robert Downey JR",52,"https://daman.co.id/daman.co.id/wp-content/uploads/2019/10/Robert-Downey-Jr-Glasses-1.jpg");
let MarcDs = new Actor("Marc Dacascos",45,"https://food.fnr.sndimg.com/content/dam/images/food/editorial/talent/mark-dacascos/Mark_Dacascos.jpg.rend.hgtvcom.616.616.suffix/1383755132487.jpeg");

let actors = [BradPitt,RobertJr,MarcDs];
let box = document.getElementById("box");
getActors();
function getActors(){
    box.innerHTML = "";
    for (let actor of actors) {
        box.innerHTML +=
        `<div class="col-md-4 my-3">
            <img class="w-100 card-header" src="${actor.image}">
            <div class="card-footer">
                <h1>${actor.fullname}</h1>
                <small>${actor.age}</small>
            </div>
        </div>`
    }
}

function CreateActor(){
    actors.push(new Actor(inputName.value,inputAge.value,ImageUrl.value));
    getActors();
}