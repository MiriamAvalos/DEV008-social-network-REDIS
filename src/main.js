// Este es el punto de entrada de tu aplicacion
// rauter , gestiona las rutas
import { login } from './components/login';
import { register } from './components/register';
import { wall } from './components/wall';

const rootDiv = document.getElementById('root');
// objeto para acceder a todas las rutas
const routes = {
  '/': login,
  '/register': register,
  '/wall': wall,
};
// onNavigate es una función para cambiar la URL actual del navegador cuando nuestro usuario haga clic , actualiza la URL sin recargar completamente la página.
// pathname representa la nueva ruta o URL a la que deseamos navegar.
export const onNavigate = (pathname) => {
  // permite actualizar la URL para que el enrutador de la aplicación pueda interpretar la nueva ruta y cargar el contenido correspondiente
  window.history.pushState(
    {},
    pathname,
    // Se combina el origen (origin) de la URL actual con la nueva ruta (pathname) para obtener la URL completa a la que deseamos navegar.
    window.location.origin + pathname,
  );
  // El ciclo while elimina a todos los hijos de roodDiv, se encarga de limpiar la página.
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  // Si la ruta actual coincide con una ruta definida en el objeto routes, entonces routes[pathname] devolverá el componente o función correspondiente.
  // El contenido del componente asociado a la ruta actual se mostrará dentro del elemento con id "rootDiv".
  // se accede al objeto
  rootDiv.appendChild(routes[pathname](onNavigate)); // routes[/signUp]= singUp(onNavigate)
};

/* Se obtiene el componente correspondiente a la ruta actual y se agrega al DOM para mostrar el contenido
 correcto en la página web según la ruta actual del navegador. */
const component = routes[window.location.pathname];

// Recuperar y remplazar el contenido de rootDiv cuando navega hacia  atrás  o hacia adelante del historial(las saca del historial)
/* window.addEventListener('popstate', () => {
  const paginas = routes[window.location.pathname];
  rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.appendChild(paginas(onNavigate));
  console.log(window.location.pathname);
}); */
window.onpopstate = () => {
  onNavigate(window.location.pathname);
};
// Agrega el contenido a la pantalla , se ejecuta la función onNavigate
rootDiv.appendChild(component(onNavigate));
// console.log(component);
