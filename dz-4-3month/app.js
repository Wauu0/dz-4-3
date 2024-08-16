// const button = document.querySelector(".btn")
// button.onclick = () => {
//     const request = new XMLHttpRequest()//1. создания запрорса
//     request.open('GET','person.json') // 2.указание метода запроса и пути
//     request.setRequestHeader('Content-type','application/json')// 3 указывания заголовка
//     request.send()// 4. отправка запроса
    
//     request.onload = () => {
//     const data = JSON.parse(request.response)
//     document.querySelector(".name").innerHTML = data.name
//     document.querySelector(".age").innerHTML = data.age
//     document.querySelector(".image").innerHTML = data.image
//     }
// }

const persons_block = document.querySelector(".persons_block")

const object_persons_json = new XMLHttpRequest()
object_persons_json.open('GET','person.json')
object_persons_json.setRequestHeader('Content-type', 'application.json')
object_persons_json.send()

object_persons_json.addEventListener("load", () => {
    const string = JSON.parse(object_persons_json.response)
    console.log(string.characters);
    string.characters.forEach(element => {
        console.log(element)
        const person_card = document.createElement('div')
        person_card.setAttribute("class", "person_card")
        person_card.innerHTML = `
            <div>
                <img src="${element.photo}" alt="person">
            </div>
            <p>${element.name}</p>
            <p>${element.age}</p>
            <p>${element.gender}</p>                    
        `
        persons_block.append(person_card)
    });
})

// const lod = new XMLHttpRequest()
// object_persons_json.open('GET','log.json')
// object_persons_json.setRequestHeader('Content-type', 'application.json')
// object_persons_json.send()
// onclick(
//     console.log()
// )
