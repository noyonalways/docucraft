import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="lg:flex">
      <Link href="/">
        <Image
          className="h-6 w-auto dark:hidden block"
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={24}
          priority
        />
      </Link>
      <Link href="/">
        <Image
          className="h-6 w-auto hidden dark:block"
          src="/logo-dark.svg"
          alt="Logo"
          width={100}
          height={24}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
