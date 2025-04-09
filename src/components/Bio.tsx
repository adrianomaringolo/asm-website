import Image from "next/image";

export function Bio() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        <Image
          src="/anelita-foto.jpg" // Salve a imagem como /public/anelita-foto.jpg
          alt="Anelita"
          width={300}
          height={300}
          className="rounded-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Quem é Anelita?</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisl
            diam, hendrerit eget arcu nec, consequat ornare diam. Donec euismod
            malesuada mattis. Maecenas augue orci, semper id justo in, dapibus
            ullamcorper dui. Nullam sagittis dui mi, vitae ultricies odio
            vulputate vel. Nunc massa mauris, commodo a fringilla eu, hendrerit
            blandit lacus. Maecenas vehicula, sapien at molestie vehicula, urna
            quam congue felis, nec aliquam velit nisi non ex. Morbi neque
            mauris, consectetur id venenatis vel, sagittis nec erat.
          </p>
        </div>
      </div>
    </section>
  );
}
