let elements = document.getElementsByName('cssProperty');
console.log(elements);
 
let modify = document.getElementById('modify');
let set = function (event){
    let length = elements.length;
    for(let index = 0; index < length; index++){
        let background = elements[index].getAttribute('id');
        console.log(background);
        let value = elements[index].value;
        console.log(value);
        modify.style[background] = value;
    }
}