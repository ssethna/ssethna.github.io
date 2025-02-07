const radioButtons = document.querySelectorAll('input[name="rest"]');

for(const radioButton of radioButtons) {
    radioButton.addEventListener('change', showSelected);
}

let bookMethod = '';
let id = '';

async function runBookClient() {
    if(bookMethod == 'POST') {
        id = '0';
    } else {
        id = document.querySelector('#id').value;
    }
//    let id = document.querySelector('#id').value;
    let author = document.querySelector('#author').value;
    let book = document.querySelector('#book').value;
    const formData = new FormData();
    formData.append('id', id);
    formData.append('author', author);
    formData.append('book', book);

    protocol = window.location.protocol; 
    domain = window.location.host; 
    port = window.location.port;
    let urlPut  = protocol + "//" + domain + "/rest/rs";
    
    const response = await fetch(urlPut, {method: bookMethod,
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(Object.fromEntries(formData))});
    const answer = await response.text();
    console.log(answer);
    outPutResult(answer, '#updateBook');
}

function outPutResult(re, fset) {
    const fieldsets = document.querySelectorAll(fset);
    const para = document.createElement("p");
    para.classList.add('test');
    para.style.marginTop = "10px";
    para.style.marginBottom = "5px";
    para.style.textAlign = "left";
    para.style.fontSize = "14px";
    para.id = "test";
    const node = document.createTextNode(re);
    para.appendChild(node);
    fieldsets[0].appendChild(para);
}

function showSelected(e) {
    if(this.value == 'delete') {
        bookMethod = 'DELETE'
        document.querySelector('#id').style.visibility="visible";
        document.querySelector('#author').style.visibility="hidden";
        document.querySelector('#book').style.visibility="hidden";
        document.querySelector('#labelId').style.visibility="visible";
        document.querySelector('#labelAuthor').style.visibility="hidden";
        document.querySelector('#labelBook').style.visibility="hidden";
    } else if (this.value == 'update') {
        bookMethod = 'PUT'
        document.querySelector('#id').style.visibility="visible";
        document.querySelector('#author').style.visibility="visible";
        document.querySelector('#book').style.visibility="visible";
        document.querySelector('#labelId').style.visibility="visible";
        document.querySelector('#labelAuthor').style.visibility="visible";
        document.querySelector('#labelBook').style.visibility="visible";
    } else if (this.value == 'add') {
        bookMethod = 'POST'
        document.querySelector('#id').style.visibility="hidden";
        document.querySelector('#author').style.visibility="visible";
        document.querySelector('#book').style.visibility="visible";
        document.querySelector('#labelId').style.visibility="hidden";
        document.querySelector('#labelAuthor').style.visibility="visible";
        document.querySelector('#labelBook').style.visibility="visible";
    }
}

