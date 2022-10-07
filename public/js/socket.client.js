// Refenecias del Html
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socketClient = io(); 


socketClient.on('connect', () => {
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socketClient.on('disconnect', () => {
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

socketClient.on('enviar-mensaje', (payload) => {
    console.log(payload);
})

btnEnviar.addEventListener('click', ()=> {
    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
        id: '123ssdf',
        fecha: new Date().getTime()
    }

    socketClient.emit('enviar-mensaje', payload, ( id ) => {
        console.log('Desde el server', id);
    });
})