import type { Metadata } from 'next';
import './globals.css';
import './evidence-stories.css';

export const metadata: Metadata = {
  title: '유다현 | CJ제일제당 플랫폼 개발 포트폴리오',
  description: 'CJ제일제당 플랫폼 개발 직무를 위한 유다현의 풀스택 개발 포트폴리오',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://cj.dahyeon.kr',
    title: '유다현 | CJ제일제당 플랫폼 개발 포트폴리오',
    description: '고객의 클릭 한 번부터 데이터의 마지막 줄까지, 끝까지 따라가는 플랫폼 개발자',
    images: [{
      url: '/assets/og-cj-portfolio.png',
      width: 1200,
      height: 630,
      alt: '유다현의 CJ제일제당 플랫폼 개발 포트폴리오',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '유다현 | CJ제일제당 플랫폼 개발 포트폴리오',
    description: '고객의 클릭 한 번부터 데이터의 마지막 줄까지, 끝까지 따라가는 플랫폼 개발자',
    images: ['/assets/og-cj-portfolio.png'],
  },
  icons: {
    icon: '/assets/cj-blossom-favicon.png',
    shortcut: '/assets/cj-blossom-favicon.png',
    apple: '/assets/cj-blossom-favicon.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
