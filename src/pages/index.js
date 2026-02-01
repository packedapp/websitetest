import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Home" description="hello from packed">
      <main style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        fontSize: '2rem',
      }}>
        hello from packed
      </main>
    </Layout>
  );
}
