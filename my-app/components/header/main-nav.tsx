import Link from 'next/link';
import Container from '../container';
import { RiArrowDownSLine } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import Image from 'next/image';
export default function MainNav() {
  return (
    <nav className="h-[170px] w-full flex items-center">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center h-full">
            <ul className="text-[20px] text-[#19181B] flex items-center gap-2">
              <li>
                <Link
                  href={'/'}
                  className="bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href={'/'} className="flex items-center">
                  About <RiArrowDownSLine />
                </Link>
              </li>
              <li>
                <Link href={'/'} className="flex items-center">
                  Services <RiArrowDownSLine />
                </Link>
              </li>
              <li>
                <Link href={'/'}>Projects</Link>
              </li>
            </ul>
          </div>
          <div>
            <Image src={'/logo.png'} alt="" width={178} height={151} />
          </div>

          <ul className="text-[20px] text-[#19181B] flex items-center gap-2">
            <li>
              <Link href={'/'} className="flex items-center">
                عربية
                <RiArrowDownSLine />
                <div>
                  <Image src={'/flag.png'} alt="" width={25} height={17} />
                </div>
              </Link>
            </li>
            <li>
              <Link href={'/'} className="text-[#555555] flex items-center ">
                <FiUser />
                <span className="pl-2 pr-2">Login | Register</span>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
