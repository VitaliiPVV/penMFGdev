import Link from "next/link";
import Button from "./Button";

const GetQuote = () => {
  return (
    <Link href="/quote" className="w-fit">
      <Button variant="primary" size="lg" className="w-full md:w-fit">
        Get A Quote
      </Button>
    </Link>
  );
};

export default GetQuote;
