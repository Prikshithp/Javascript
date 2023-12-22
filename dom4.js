function addlanguage(langname){
            const li =document.createElement('li');
            li.innerHTML=`${langname}`
            document.querySelector('.language').appendChild(li);
        }
        addlanguage("python");
        addlanguage("c++");
        function addoptilan(langname){
            const li =document.createElement('li');
            li.appendChild(document.createTextNode(langname));
            document.querySelector('.language').appendChild(li)
        }
        addoptilan('golang');
        const secondlang=document.querySelector("li : nth-child(2)");
        const newli=document.createElement('li');
        newli.textContent="mojo"
        secondlang.replaceWith(newli)
