export const EmailTemplate = ({ name, email, message }) => (
  <div>
    <p>Hola JUAN!</p>
    <p>
      Soy {name} y este es mi email {email}!
    </p>
    <p>{message}</p>
    <p>
      Un saludo,
      <br />
      🚲🚲🚲
    </p>
  </div>
);
