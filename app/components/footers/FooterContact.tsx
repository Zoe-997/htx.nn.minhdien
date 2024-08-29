import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const FooterContact = () => {
  return (
    <div>
      <ul>
        <li className="flex flex-wrap gap-2 mb-2">
          <MapPin size={15} />
          <div className="flex-1">
            <strong>HTX - Minh Dien</strong>
            <p>
              Truc Chinh commune, Truc Ninh district, Nam Dinh province,
              VietNam.
            </p>
          </div>
        </li>
        <li className="flex flex-wrap gap-2 mb-2">
          <Phone size={15} />
          <Link href="tel: (+84) 833 251 098" className="flex-1">
            (+84) 833 251 098
          </Link>
        </li>
        <li className="flex flex-wrap gap-2 mb-2">
          <Mail size={15} />
          <Link href="mailto: htx.minhdien.nd@gmail.com" className="flex-1">
            htx.minhdien.nd@gmail.com
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
