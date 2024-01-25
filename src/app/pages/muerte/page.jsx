import { PlayArrowOutlined, PlayArrowRounded } from "@mui/icons-material";
import "./styles.css";
import Image from "next/image";
import juanbaila from "../../../../public/assets/juanbaila.jpg";
export default function Muerte() {
  return (
    <div
      id="muerte"
      className="w-screen flex flex-col items-center justify-center content-center"
    >
      <div className=" text-pink-600 w-screen flex flex-col justify-center text-center items-center text-8xl mt-10 pt-10 pb-10 bg-amber-50">
        <div>
          <div className="w-full  items-center content-center text-start">
            <p className="text-lg max-w-5/6 px-3 sm:max-w-1/2 sm:px-40 mb-2">
              La Muerte de Juan. Ese es el documental que publicaremos en 2024 y
              que aquí podéis ver en el tráiler recién estrenado.
            </p>
            <p className="text-lg max-w-5/6 px-3 sm:max-w-1/2 sm:px-40 mb-2">
              Porque en el camino hacia la muerte hay mucha vida. Y esa es la
              intención de este documental: a través de tantas experiencias
              cercanas a la muerte que he tenido, recordarte lo importante que
              es vivir.
            </p>
            <p className="text-lg max-w-5/6 px-3 sm:max-w-1/2 sm:px-40 mb-2">
              Y es que es fundamental deshacernos de este tabú que es el hablar
              de la muerte. Entender que debemos celebrar la Vida de quienes ya
              no nos acompañan.
            </p>
            <p className="text-lg max-w-5/6 px-3 sm:max-w-1/2 sm:px-40 mb-2">
              Porque al final vamos a morir. Antes o después. Así que hagamos de
              ese camino hacia la muerte algo bonito y digno de un gran brindis.
            </p>

            <p className="text-lg max-w-5/6 px-3 sm:max-w-1/2 sm:px-40 mb-10">
              Decir que el documental está dirigido y rodado por{" "}
              <span className="text-neutral-900 font-neutral-900">@gkmph </span>
              y
              <span className="text-neutral-900 font-neutral-900">
                @EduardoPelach
              </span>
            </p>
          </div>

          <a
            href="https://www.youtube.com/watch?v=ZRS0hYmDy4k"
            className="lamuertedejuan mt-10  hover:text-pink-400"
            target="_blank"
          >
            La muerte de Juan
            <PlayArrowOutlined className="text-8xl" />
          </a>
        </div>
      </div>
      <Image src={juanbaila} alt="" width={4500} height={2000} />
    </div>
  );
}
