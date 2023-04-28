import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

type LayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: 'Traversy Media',
  description: 'Web development tutorials and courses.',
  keywords: 'web development, web design, javascript, react, node, html, css',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='ko'>
      <body className={notoSansKR.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
