"use client";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { useContactsStore } from "@/app/apis/stores/contactsStore";
import { useEffect, useState } from "react";

const FooterContact = () => {
  const { getAllContact } = useContactsStore();
  const [mainContact, setMainContact] = useState<any>({});

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) setMainContact(res.data[0]);
    };
    getAllContact("main", onSuccess);
  }, [getAllContact]);

  return (
    <div>
      <ul>
        <li className="flex flex-wrap gap-2 mb-2">
          <MapPin size={15} />
          <div className="flex-1">
            <strong>{process.env.NEXT_PUBLIC_STORE_NAME}</strong>
            <p>{mainContact?.address}</p>
          </div>
        </li>
        <li className="flex flex-wrap items-center gap-2 mb-2">
          <Phone size={15} />
          <Link href={`tel: ${mainContact?.phone}`} className="flex-1">
            {mainContact?.phone}
          </Link>
        </li>
        <li className="flex flex-wrap items-center gap-2 mb-2">
          <Mail size={15} />
          <Link href={`mailto: ${mainContact.email}`} className="flex-1">
            {mainContact.email}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
