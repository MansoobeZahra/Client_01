import Image from "next/image";

export default function PhotographySection() {
  const photos = [
    { src: "/hkhsj.png", alt: "Nature" },
    { src: "/new7.png", alt: "Street" },
    { src: "/new6.png", alt: "Portrait" },
    { src: "/my1.png", alt: "Travel" },
  ];

  return (
    <section
      id="photography"
      className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] py-20 bg-[#fff8f5] dark:bg-[#0f0f0f]"
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-red-700">
          My Photography
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm md:text-base">
          Capturing moments that inspire creativity & emotion 🎞️
        </p>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-6 md:px-16">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl group cursor-pointer"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={500}
              height={500}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}