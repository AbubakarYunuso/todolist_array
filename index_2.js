//массив со списком дел
let array =[
    {
        text: "первое дело",
        done: true
    },
    {
        text: "второе дело",
        done: false
    },
    {
        text: "третье дело",
        done: false
    },
    {
        text: "четвёртое дело",
        done: false
    },
    {
        text: "пятое дело",
        done: false
    },
]
// функция render, которая перебирает массив 
const render = (toDoList) => {
//вызов из html div c id list
    const list = document.getElementById('list')
//очистка данног div от элементов внутри
    list.textContent = ''
//запуск цикла, чтобы перебрать элементы из массива
    for(let i = 0; i < toDoList.length; i++){
// создание контайнера, где всё находится
        const toDoContainer = document.createElement('div')
// присвоение класса контейнеру
        toDoContainer.classList.add('to-do-list')
// создание тега с текстом 
        const text = document.createElement('div')
// присвоение класса текту
        text.classList.add('text')
// создание checkbox
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
// присвоение класса чекбоксу
        checkbox.classList.add('checkbox')
//привязываю функцию по смене done к чекбоксу
        checkbox.addEventListener('change',()=>{
            chekToDo(i)
        })
//смена цвета при шрифта при значении true в done
if(toDoList[i].done === true){ 
    text.style.color = 'green'
}
// присвоение чекбоксу значение 
        checkbox.checked = array[i].done
// создание кнопки
        const deleteButton = document.createElement('button')
//текст в кнопке
        deleteButton.textContent = 'x'
// присвоение класса кнопке
        deleteButton.classList.add('delete-button')
// добавление всего в контейнер
        toDoContainer.append(checkbox,text,deleteButton)
// привязываю функцию удаления к кнопке deleteButton
        deleteButton.addEventListener('click',()=>{
            remove(i)
        })
// присваевание переменной text значение из массива 
        text.textContent = toDoList[i].text
//добавляю значение в list
        list.append(toDoContainer)
    }
}
//функция для удаления
const remove = (i)=>{
    array.splice(i,1)
    render(array)
}
// функция для добавления
const addTodo = (text) =>{
    array.push({
        text:text,
        done:false
    })
    render(array)
}
//функция для смены значения done
const chekToDo = (i)=>{
    array[i].done = !array[i].done
    render(array)
}
//вызов form из html
const form = document.querySelector('form')
//вызов input из html для дальнейшего использования его value значения 
const inputForm = document.querySelector('input')
// задаю input класс
inputForm.classList.add('text-input')
// вызов button из html для использования виде добавления при нажатии 
const buttonForm = document.querySelector('button')
// даём кнопке класс
buttonForm.classList.add('first-button')
//делаем данную манипуляцию с form чтобы при нажатии на button 
//страница не обновлялась
form.addEventListener('submit',(e)=>{
    e.preventDefault()
})
//привязываем к кнопке button функцию addTodo
buttonForm.addEventListener('click',()=>{
    addTodo(inputForm.value)
})
//вызов для вывода списка дел на экран 
render(array)
// Отвечаю ю ер шоз яз йин