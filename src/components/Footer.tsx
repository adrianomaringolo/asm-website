export function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 py-6 bg-gray-100">
      © Todos os direitos reservados – ASM Marketing Digital –{" "}
      {new Date().getFullYear()}
      <p className="text-xs">
        Desenvolvido por{" "}
        <a href="https://adrianomaringolo.dev" className="underline">
          adrianomaringolo.dev
        </a>
      </p>
    </footer>
  );
}
