/* eslint-disable @next/next/no-img-element */

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mx-4">
      <div className="grid gap-4">
        <div>
          <img
            className="rounded-lg object-cover w-full h-full"
            src="../../../assets/juan1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-lg object-cover w-full h-full"
            src="../../../assets/juan2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-lg object-cover w-full h-full"
            src="../../../assets/juan3.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="rounded-lg object-cover w-full h-full"
            src="../../../assets/juan4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-lg object-cover w-full h-full"
            src="../../../assets/juan5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-lg object-cover w-full h-full"
            src="../../../assets/juan6.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="rounded-lg object-cover w-full h-full"
            src="../../../assets/juan7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-lg object-cover w-full h-full"
            src="../../../assets/juan8.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-lg object-cover w-full h-full"
            src="../../../assets/juan9.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="rounded-lg object-cover w-full h-full"
            src="../../../assets/juan10.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-lg object-cover w-full h-full"
            src="../../../assets/juan11.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-lg object-cover w-full h-full"
            src="../../../assets/juan12.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
