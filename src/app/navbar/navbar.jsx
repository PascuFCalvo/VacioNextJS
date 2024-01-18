export default function Navbar() {
  return (
    <nav class="fixed font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-evenly py-4 px-6 bg-neutral-800 shadow sm:items-baseline w-full text-white z-50">
      <div>
        <a
          href="#"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 mr-4"
        >
          ¿Quien es Juan?
        </a>
        <a
          href="#"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 mr-4"
        >
          LIBRO
        </a>
        <a
          href="#"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 mr-4"
        >
          RETOS
        </a>
        <a
          href="#"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 mr-4"
        >
          CHARLAS
        </a>
      </div>
      <div class="mb-2 sm:mb-0">
        <a
          href="#"
          class="text-4xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          JUAN VACIO
        </a>
      </div>
      <div>
        <a
          href="#"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 mr-4"
        >
          DOCUMENTAL
        </a>
        <a
          href="#"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 mr-4"
        >
          MOTIVANDO
        </a>
        <a
          href="#"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 mr-4"
        >
          FAMILIA
        </a>
        <a
          href="#"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 mr-4"
        >
          CONTACTO
        </a>
      </div>
    </nav>
  );
}
