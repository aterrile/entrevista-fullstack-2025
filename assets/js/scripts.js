document.addEventListener('DOMContentLoaded', function () {
    

    // Cear el boton
    const divInputBoton = document.getElementById('input-y-boton');

    const button = document.createElement('button');
    button.textContent = 'Crear elemento';
    button.setAttribute('id', 'dynamicButton');
    divInputBoton.appendChild(button);

    // Crear el input que recibe el elemento a crear
    const initInput = document.createElement('input');
    initInput.setAttribute('type', 'text');
    initInput.setAttribute('id', 'initInput');
    initInput.setAttribute('placeholder', 'Creado en código');
    initInput.setAttribute('value', '');
    divInputBoton.appendChild(initInput);


    document.getElementById('dynamicButton').addEventListener('click', function(){
        elementName = document.getElementById('initInput').value;
        creteElement(elementName)
    } , false);


});

function creteElement(elementName){
    const divContainerElementos = document.getElementById('container-elementos');
    divContainerElementos.innerHTML = '';

    switch (elementName) {
        case 'input':
            const dynamicInput = document.createElement('input');
            dynamicInput.setAttribute('type', 'text');
            dynamicInput.setAttribute('id', 'inputDynamic');
            dynamicInput.setAttribute('class', 'input-dynamic');
            dynamicInput.setAttribute('placeholder', 'Creado en código');
            dynamicInput.setAttribute('value', '');
            divContainerElementos.appendChild(dynamicInput);
        break;

        case 'anchor':
            var a = document.createElement('a');
            var linkText = document.createTextNode("Un enlace");
            a.appendChild(linkText);
            a.title = "my title text";
            a.href = "http://example.com";
            divContainerElementos.appendChild(a);
        break;

        case 'button':
            const dynButton = document.createElement('button');
            dynButton.textContent = 'Hola mundo';
            dynButton.setAttribute('id', 'dynButton');
            divContainerElementos.appendChild(button);
    break;
    
        default:
            var paragraph = document.createElement("p");
            var paragraphContent = document.createTextNode("Hola!¿Qué tal?");
            divContainerElementos.appendChild(paragraphContent);
        break;
    }
}