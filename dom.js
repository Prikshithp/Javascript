document.getElementById("title")
document.getElementById("title").id
document.getElementById("title")..className
document.getElementById("title").setAttribute('class'),'test')// always overwrite
title.style.backgroundcolor='red'
// types of content
1> title.innerHtml > pura html code deta hidden tags bi
.innertext > only shows that visible to end user
.textcontent > sab show krta hidden text bi

// different ways to select text
1> document.querySelector('h2') // selects the first h2 from the page
2> ('#title') -> for id 
3> ('.class') -> for class

  const myul = document.querySelector('ul')
conat turngreen=document.querySelector('li')
turngreen.style.color='green'
turngreen.style.innerText="five"


** for selecting mutiple
const templist= document.queryselectorall('li') -> it would return an nodelist
templist[0].style.color='green'
templist.forEach( function (li){
   li.style.back                        
    
})

const tempclass=document.getelementbyclassname('list') > would return html collection
Array.from() // change html collection to array then we can use foreach
