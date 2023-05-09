let id = 0

const submit = () => {
  let type = document.querySelector('#type').value
  let label = document.querySelector('#label').value
  let placeholder = document.querySelector('#placeholder').value
  switch (type) {
    case 'text':
      appendText(label, placeholder)
      break
    case 'Radio':
      appendRadio(label, placeholder)
      break
    case 'button':
      appendButton(label)
  }
}

const appendText = (label = 'no Label', placeholder = 'no placeholder') => {
  let el = document.createElement('div')
    let input = document.createElement('input')
    input.setAttribute('class', 'form-control mt-3')
    input.setAttribute('placeholder', placeholder)
    input.setAttribute('title', placeholder)

    let p = document.createElement('p')
    p.textContent = label
    p.setAttribute('class', 'form-label mt-2 text-light')

    let del = document.createElement('button')
    del.textContent = 'Delete'
    del.setAttribute('class', 'form-control btn btn-danger btn-sm mt-2')
    del.addEventListener('click', function() {
        el.remove()
    })

    el.append(p)
    el.append(input)
    el.append(del)

    document.querySelector("#results").append(el)
}

const appendRadio = (label = 'no label', placeholder = 'no placeholder') => {
  let el = document.createElement("div")
    let radio = document.createElement("input")
    radio.setAttribute("class", "mt-3")
    radio.setAttribute("placeholder", placeholder)
    radio.setAttribute("type", "radio")
  
    let p = document.createElement("p")
    p.textContent = label;
    p.setAttribute('class', 'text-light')
  
    let del = document.createElement("button")
    del.textContent = "Delete";
    del.setAttribute('class', 'btn btn-danger')
    del.addEventListener("click", () => {
      el.remove();
    });
  
    el.appendChild(radio)
    el.appendChild(p)
    el.appendChild(del)
  
    document.querySelector("#results").appendChild(el);
  };

const appendButton = (label = 'no label') => {
    let el = document.createElement("div")
    let btn = document.createElement("input")
    btn.setAttribute("class", "mt-3")
    btn.setAttribute("type", "button")
    btn.setAttribute("value", label)
  
    let del = document.createElement("button")
    del.textContent = "Delete";
    del.setAttribute('class', 'btn btn-danger m-2')
    del.addEventListener("click", () => {
      el.remove();
    });
  
    el.appendChild(btn);
    el.appendChild(del);
  
    document.querySelector("#results").appendChild(el);
  };