import Head from 'next/head';
import { AppContent } from '../components/AppContent';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>HOME.AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="AI-powered solutions for smart living and business at home."
        />
      </Head>
      <AppContent />
    </>
  );
}


