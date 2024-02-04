


const getBtn = document.getElementById('getBtn')
const postBtn = document.getElementById('postBtn')
const contentDiv = document.getElementById('content')
// get request


getBtn.addEventListener('click', async ()=>{
    try{
    const res=  await fetch('https://reviews-api-rose.vercel.app/reviews')
    console.log(res)
    const data = await res.json();
    data.forEach(element => {
        const para = document.createElement('p')
        para.textContent = `name : ${element.name} , review : ${element.review}` 
        contentDiv.appendChild(para)
    });
    
    }
    catch (err){
        console.log(err)
    }
    })
// getBtn.addEventListener('click', async ()=>{    
// fetch('https://reviews-api-rose.vercel.app/reviews')
// .then(res => {
//     console.log(res)
// return res.json()
// }    )
// .then(data =>{
//     console.log(data)
// data.forEach(element => {
//     const para = document.createElement('p')
//     para.textContent = `name : ${element.name} , review : ${element.review}` 
//     contentDiv.appendChild(para)
// });
// })
// .catch(err => console.log(err))
// })



postBtn.addEventListener('click',()=>{

    fetch('https://reviews-api-rose.vercel.app/reviews',{

    method: "POST",
    headers: {
        'content-type': "application/json"
    },

    body: JSON.stringify({
        name: 'Anwar',
        review: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    })
    })
    .then(res => {
        console.log(res)
    return res.json()
    }    )
    .then(data =>{
        console.log(data)
    })
    .catch(err => console.log(err))
    })
    









