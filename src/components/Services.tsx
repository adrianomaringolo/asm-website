export function Services() {
  return (
    <section className="relative bg-dark text-white py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-left">
          <span className="font-light text-base">Como posso te ajudar? </span>
          <br />
          <span className="font-bold">Conheça meus serviços</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="border border-white/20 p-6 rounded-lg text-left"
            >
              <p className="text-lg font-medium mb-2">Gestão de Instagram</p>
              <p className="text-sm text-gray-300">
                Conteúdo, agendamento, análise e crescimento
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-lg">
          <p className="mb-4">+20 clientes atendidos</p>
          <p>+1000 posts em redes sociais</p>
        </div>
      </div>
      <div className="absolute w-60 h-80 bg-[#DDCC70] rounded-full blur-[100px] opacity-50 -right-20 -bottom-20" />
    </section>
  );
}
