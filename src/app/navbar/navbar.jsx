export default function Navbar() {
  return (
    <nav class="fixed font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-neutral-400/25 shadow sm:items-baseline w-full text-white z-50">
      <div>
        <a
          href="#"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          One
        </a>
        <a
          href="#"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Two
        </a>
        <a
          href="#"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Three
        </a>
      </div>
      <div class="mb-2 sm:mb-0">
        <a
          href="#"
          class="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          Home
        </a>
      </div>
      <div>
        <a
          href="#"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          One
        </a>
        <a
          href="#"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Two
        </a>
        <a
          href="#"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Three
        </a>
      </div>
    </nav>
  );
}
