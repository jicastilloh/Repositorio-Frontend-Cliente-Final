let verMenuCena = document.getElementById('verMenuCena');

verMenuCena.addEventListener('click', viendoMenuCenas);

function viendoMenuCenas(){

    const http = new XMLHttpRequest();
    const url = `http://127.0.0.1:3000/cenas`

    http.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            let resMenuCena = JSON.parse(this.responseText);

            let viendoCenas = document.getElementById('viendoCenas');
            viendoCenas.innerHTML = '';

            for(let i = 0; i < resMenuCena.length; i++){

                viendoCenas.innerHTML += `
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="input-group mb-2">
                                <h5 class="tamanio-text">Nombre: ${resMenuCena[i].nombre}</h5>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="input-group mb-2">
                                <h5 class="tamanio-text">Precio: ${resMenuCena[i].precio}</h5>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="input-group mb-2">
                                <span class="input-group-text tamanio-text">Cantidad</span>
                                <input class="form-control tamanio-text" type="number">
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                `

            }


        }

    }

    http.open('GET', url);
    http.send();

}