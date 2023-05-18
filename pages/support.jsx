import { useRouter } from 'next/router';

export default function support() {
  const router = useRouter();

  return null;
}

export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: 'https://discord.gg/fpQvAxJFmp' });
  res.end();

  return {
    props: {},
  };
}
