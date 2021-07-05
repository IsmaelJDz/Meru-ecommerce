import { useSelector } from "react-redux";
import Link from 'next/link';
import Image from 'next/image';

import CartIcon from '@/components/cart-icon/';
import CartDropdown from '../cart-dropdown';


const Header = () => {

  const products = useSelector(state => state.cart);

  const hidden = products.hidden;

  return (
    <header className="flex max-w-screen-xl flex-col items-center sm:mx-8 sm:flex-row sm:justify-between md:justify-between my-2.5 sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-md bg-opacity-50 xl:mx-auto">
      <div className="">
        <Link href="/">
          <a>
            <Image src="/img/logo.svg" height={60} width={150} />
          </a>
        </Link>
      </div>
      <div className="flex gap-4 content-center items-center">
        <Link href="/">
          <a className="p-2 hover:bg-gray-700 hover:text-white">SHOP</a>
        </Link>
        <Link href="/checkout">
          <a className="p-2 hover:bg-gray-700 hover:text-white">CHECKOUT</a>
        </Link>
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </header>
  );
};

export default Header;