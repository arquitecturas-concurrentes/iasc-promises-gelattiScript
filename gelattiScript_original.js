agregarHtml = (html) => {  var elemento = document.createElement('div');  elemento.innerHTML = html;  document.body.appendChild(elemento);};
agregarCss = (css) => {  var style = document.createElement('style');  style.type = 'text/css';  style.innerHTML = css;  document.getElementsByTagName('head')[0].appendChild(style);};
elegirGusto = (gusto) => ({accion: () => encontrarGusto(gusto).querySelector('span').click(),condicionFin: () => !!encontrarGusto(gusto).querySelector('.active')});
confirmarGusto = () => ({accion: () => document.querySelector('#button-product-add-by-store').click(),condicionFin: () => !document.querySelector('div.input-radio > app-product-topping-item')});
seleccionarCuartoDeHelado = () => ({accion: () => document.querySelector('#product-986649').click(),condicionFin: () => !!document.querySelector('div.input-radio > app-product-topping-item')});
validarGustos = (gustos) => ({accion: () => { var gustosQueFaltan = gustos.filter(gusto => !existeGusto(gusto)); if(gustosQueFaltan.length !== 0) { alert('Hay gustos que no figuran en la lista: ' + uniq(gustosQueFaltan).join(', ')); throw 'nope' }},condicionFin: () => true});
cerrarDetalleProducto = () => ({accion: () => document.querySelector('#product-view div.modal-box > button.close-modal > i').click(),condicionFin: () => !document.querySelector('div.input-radio > app-product-topping-item')});
marcarGustoOK = (n) => ({accion: () => document.querySelector('#info-pedido-10pines tbody tr:nth-child(' + n + ') td:nth-child(3)').style.background = 'green',condicionFin: () => document.querySelector('#info-pedido-10pines tbody tr:nth-child(' + n + ') td:nth-child(3)').style['background-color'] == 'green'});
wait = (condicion) => {const retry = (condicion, resolve, intentos) => {if (intentos <= 0) { throw 'Timeout' }if (condicion()) { resolve() } else { setTimeout(() => retry(condicion, resolve, intentos-1), 100) }};return new Promise(resolve => retry(condicion, resolve, 50))};
uniq = (lista) => [...new Set(lista)];
gustos = () => { return Array.from(document.querySelectorAll('div.input-radio > app-product-topping-item'))};
nombresGustos = () => gustos().map(gusto => gusto.innerText);
existeGusto = nombre => !!encontrarGusto(nombre);
encontrarGusto = nombre => gustos().find(unGusto => normalizarNombreDeGusto(unGusto.innerText) === normalizarNombreDeGusto(nombre));
execute = (commands) => commands.reduce((acum, command) => acum.then(() => { command.accion(); return wait(command.condicionFin)}), Promise.resolve());
normalizarNombreDeGusto = (nombre) => nombre.toLowerCase().replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/\s+/g, '').trim();;
agregarCss(`#info-pedido-10pines {  position: fixed;  bottom: 0;  left: 0;  background: whitesmoke;  padding: 1em;  box-shadow: 2px -2px 6px gray;  z-index: 99999;}#info-pedido-10pines h3 {  text-align: center;  margin-bottom: .5em;  border-bottom: 1px solid gray;}#info-pedido-10pines > div {  overflow-y: auto;  overflow-x: hidden;  max-height: 500px;}#info-pedido-10pines table td {  border: 1px solid black;  padding: .6em 1em;  min-width: 40px;  background: white;}#info-pedido-10pines h3::after {  content: ' ';  width: 15px;  height: 20px;  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAUCAYAAABSx2cSAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAALEqAACxKgFhpyzvAAAAB3RJTUUH4wQNFisVWOh70QAAAgZJREFUOMuVkz9oU1EUxr9z70vSgGLBRXDwX9uHYhqjIbZQ66J1cHR0SES3uAhuQgt2tziYQaV1cxAr4iQOEhwCbdMU0gSKwYiIgkMtRU3ufe/e41Dboi///OAu99zL7/s45wAdVPt86E6nOrW6XFg7gv49OKU1SuEwEhs/sJJy64F3IvDx4yBSbh2/tLiujEBDixspt47F+mBv5KVPAweMpq9sARKA4/DBM4drX7qSAUB5MqcMQTNBGYIyMtc18+u1E+iTSPo+LzDv1ojAToTOKg+LE0PVIHm+HMMlt4qGRxlliTRvkTUTlCVqNCk9MVTFi9VY+8wvKzFm28KiAF7l3ovHD5rcMvPzSny56e8S/6L7hMtZtxjI/KSUQMTBMWO5DEa07VAQGlLSsDKilo4XIR6tJJFJlKAMZbURUW0F2h1lRLTpi5vpeBEPS8kt8lz59F6txSYY3UVAOGT3XRte3nQA4KcKzbLhNiPzjxjwIOcAXKGZpdEBa3iVGRH0KCIoKSnmKENjbOkbAPOnZhl8NOiWPux0hyEJGHOMwTNmzG9bFr5pmnBo1hpc3emnwFPpexkrZd+2dWKYliknC+f7reHvzAwQQTi0f3okv951MaYK47g7mt/QLGa0keyxuD89kl+fLIz3tpK33pwDRcPHrc9V4dBJNHTl3sV3+C9l31643an+G9+R8tQyIPizAAAAAElFTkSuQmCC');  display: inline-block;  vertical-align: top;  margin-left: .5em;}`);
agregarHtml(`<div id='info-pedido-10pines'>    <h3>Estado del pedido</h3>    <div><table>      <thead><tr><th>Gusto 1</th><th>Gusto 2</th><th></th></tr></thead>      <tbody><tr><td>Limón con Jengibre</td><td>Chocolate Rapanuino</td><td></td></tr><tr><td>DDL Triple Tentación</td><td>Frambuesa Nevada</td><td></td></tr><tr><td>DDL Triple Tentación</td><td>Banana Split</td><td></td></tr><tr><td>DDL Triple Tentación</td><td>Marroc</td><td></td></tr><tr><td>Marroc</td><td>Chocolate Rapanuino</td><td></td></tr></tbody>    </table></div>  </div>`);

execute([
seleccionarCuartoDeHelado(),
validarGustos(['Limón con Jengibre','Chocolate Rapanuino','DDL Triple Tentación','Frambuesa Nevada','DDL Triple Tentación','Banana Split','DDL Triple Tentación','Marroc','Marroc','Chocolate Rapanuino']),
cerrarDetalleProducto(),

seleccionarCuartoDeHelado(),
elegirGusto('Limón con Jengibre'),
elegirGusto('Chocolate Rapanuino'),
confirmarGusto(),
marcarGustoOK(1),

seleccionarCuartoDeHelado(),
elegirGusto('DDL Triple Tentación'),
elegirGusto('Frambuesa Nevada'),
confirmarGusto(),
marcarGustoOK(2),

seleccionarCuartoDeHelado(),
elegirGusto('DDL Triple Tentación'),
elegirGusto('Banana Split'),
confirmarGusto(),
marcarGustoOK(3),

seleccionarCuartoDeHelado(),
elegirGusto('DDL Triple Tentación'),
elegirGusto('Marroc'),
confirmarGusto(),
marcarGustoOK(4),

seleccionarCuartoDeHelado(),
elegirGusto('Marroc'),
elegirGusto('Chocolate Rapanuino'),
confirmarGusto(),
marcarGustoOK(5)
])