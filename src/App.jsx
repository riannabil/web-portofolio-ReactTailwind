import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero md:grid grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10  rounded-md"
            />
            <q>
              Jika kamu terpaku oleh sebuah hasil maka itu akan membuat mu tidak
              bersyukur, Tapi jika kamu berfokus kepada proses maka kamu akan
              menghargai sekecil apapun hasilnya
            </q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi!👋, Saya Muhammad Rian Nabil Maulana
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            possimus facilis nam cumque id adipisci quam nemo provident veniam
            fugit! Nobis alias ullam quis numquam tenetur facere omnis odio
            quod.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto"
        />
      </div>
    </>
  );
}

export default App;
