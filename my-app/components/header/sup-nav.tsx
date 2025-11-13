import { FiSearch } from 'react-icons/fi';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '../container';
import Link from 'next/link';

export default function SupNav() {
  return (
    <nav className="w-full h-[58px] bg-linear-to-r from-[#594D1C] to-[#BEA036] text-[20px]">
      <Container>
        <div className="h-full flex items-center">
          <div className="flex gap-2 border-r-2 border-white pr-2">
            <IoPhonePortraitOutline style={{ color: 'white' }} />
            <FaWhatsapp style={{ color: 'white' }} />
          </div>
          <div>
            <a
              href="tel:+201011559674"
              className="pl-2 text-white border-r-2  border-white pr-2"
            >
              Call Us : +2 - 01011559674
            </a>
          </div>

          <Link href={'./'} className="pl-2 text-white">
            CONTACT US
          </Link>
          <div className="flex rounded-md overflow-hidden ms-auto w-[489px] h-7">
            <input type="text" className="bg-white grow p-1" />
            <button className="bg-[#757007] w-[70px] h-7 flex items-center justify-center cursor-pointer">
              <FiSearch style={{ color: 'white' }} />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
