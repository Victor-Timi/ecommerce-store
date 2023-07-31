import logo from "/public/images/logo.png";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

export const revalidate = 60;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">MegaTrack</p>
            <Image width="25" height="5" alt="Logo" src={logo} />
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
