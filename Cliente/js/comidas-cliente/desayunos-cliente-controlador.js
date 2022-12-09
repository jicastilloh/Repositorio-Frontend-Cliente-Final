let verMenuDesayuno = document.getElementById('verMenuDesayuno');

verMenuDesayuno.addEventListener('click', viendoMenuDesayunos);

function viendoMenuDesayunos(){

    const http = new XMLHttpRequest();
    const url = `http://127.0.0.1:3000/desayunos`

    http.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            let resMenuDes = JSON.parse(this.responseText);

            let viendoDesayunos = document.getElementById('viendoDesayunos');
            viendoDesayunos.innerHTML = '';

            for(let i = 0; i < resMenuDes.length; i++){

                viendoDesayunos.innerHTML += `
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="input-group mb-2">
                                <h5 class="tamanio-text">Nombre: ${resMenuDes[i].nombre}</h5>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="input-group mb-2">
                                <h5 class="tamanio-text">Precio: ${resMenuDes[i].precio}</h5>
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