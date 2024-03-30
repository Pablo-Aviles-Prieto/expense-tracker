"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCallback, useMemo, useState } from "react";
import { ChangePasswordBlock } from "./change-password-block";

interface AccordionData {
  key: string;
  title: string;
  data: React.ReactNode;
}

interface AccordionBlockProps {
  userId: string;
}

export const AccordionBlock = ({ userId }: AccordionBlockProps) => {
  const [accordionValue, setAccordionValue] = useState<string>("");

  const resetAccordion = useCallback(
    () => setAccordionValue(""),
    [setAccordionValue],
  );

  const accordionData: AccordionData[] = useMemo(
    () => [
      {
        key: "change-password",
        title: "Change Password",
        data: (
          <div className="max-w-sm py-4 mx-auto">
            <ChangePasswordBlock
              userId={userId}
              resetAccordion={resetAccordion}
            />
          </div>
        ),
      },
      {
        key: "change-email",
        title: "Change Email",
        data: (
          <div>
            Block explaining how to change the email of the account (it should
            change the email in the users collection and remove if it exists,
            the associated document in the accounts collection)
          </div>
        ),
      },
      {
        key: "change-preferences",
        title: "Change Preferences",
        data: (
          <div>
            Block to change the currency, the date format and the theme. Storing
            it on DB
          </div>
        ),
      },
      {
        key: "change-name",
        title: "Change Name",
        data: <div>Block to change the name of the user</div>,
      },
    ],
    [userId, resetAccordion],
  );

  return (
    <Accordion
      onValueChange={(e) => setAccordionValue(e)}
      type="single"
      collapsible
      className="w-full"
      value={accordionValue}
    >
      {accordionData.map((accordion) => (
        <AccordionItem key={accordion.key} value={accordion.key}>
          <AccordionTrigger>{accordion.title}</AccordionTrigger>
          <AccordionContent>{accordion.data}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
