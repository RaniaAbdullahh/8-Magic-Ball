import Link from 'next/link';

export default function Footer({ result }) {
  return (
    <footer className="flex justify-between bg-teal-600 py-4 items-center">
      <Link href={{ pathname: "components/career", query: { result } }}>
        <a className="m-15">results</a>
      </Link>
    </footer>
  );
}