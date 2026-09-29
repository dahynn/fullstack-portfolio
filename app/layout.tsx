import type { Metadata } from 'next';
import './globals.css';
import './evidence-stories.css';

export const metadata: Metadata = {
  title: '유다현 | CJ제일제당 플랫폼 개발 포트폴리오',
  description: 'CJ제일제당 플랫폼 개발 직무를 위한 유다현의 풀스택 개발 포트폴리오',
  icons: {
    icon: '/assets/cj-blossom-favicon.png',
    shortcut: '/assets/cj-blossom-favicon.png',
    apple: '/assets/cj-blossom-favicon.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
