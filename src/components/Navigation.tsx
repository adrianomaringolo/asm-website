export function Navigation() {
  const navItems = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#diagnostico", label: "Diagnóstico" },
    { href: "#insta", label: "Nosso Instagram" },
    { href: "#bio", label: "Quem Sou" },
    { href: "#conteudos", label: "Conteúdos" },
  ];

  return (
    <nav
      className='fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 hidden md:block'
      aria-label='Navegação principal'
    >
      <ul className='flex flex-col gap-1'>
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className='block px-3 py-2 text-sm text-gray-700 hover:bg-[#C97B45]/20 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#C97B45]'
              aria-label={`Ir para seção ${item.label}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
