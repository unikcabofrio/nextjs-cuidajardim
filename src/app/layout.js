import * as S from "@/styles/globalStyle"

export const metadata = {
  title: "jardinagem e Paisagismo - Unik Cabo Frio",
  description: "Um site dinâmico de jardinagem e paisagismo desenvolvido em Next.js e React. Explore dicas, inspirações e produtos premium para transformar seu espaço exterior. Compatível com dispositivos móveis e oferecendo suporte personalizado, é fácil criar o jardim dos seus sonhos.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const date = new Date().getFullYear()
  const dateLas = 2024
  return (
    <html lang="pt-BR">
      <body className={S.roboto.className}>
        {children}
        <footer>
          <p>Todos os direitos reservados © {date === dateLas ? date : `${dateLas} - ${date}`}</p>
          <a href="https://wa.me/5522992846675" target="_blank">  Unik Cabo Frio</a>

        </footer>
      </body>
    </html>
  );
}
