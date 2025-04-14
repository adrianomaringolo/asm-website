export const About = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-800 text-white relative overflow-hidden">
      <div className="absolute w-60 h-60 bg-white rounded-full blur-3xl opacity-50 -right-50 -top-30" />
      <div className="absolute w-60 h-60 bg-white rounded-full blur-3xl opacity-50 -left-50 -bottom-30" />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Somos a ASM</h2>

        <p className=" mb-4">
          Com mais de 5 anos de experiência no mercado, ajudamos empresas e
          profissionais a construírem autoridade, gerarem engajamento e
          converterem seguidores em clientes.
        </p>

        <p className=" mb-4">
          Contamos com uma equipe especializada em cada etapa do marketing
          digital, com foco total em resultado e posicionamento.
        </p>
      </div>
    </section>
  );
};
