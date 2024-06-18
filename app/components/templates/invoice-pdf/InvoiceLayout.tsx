import { ReactNode } from "react";

// Types
import { InvoiceType } from "@/types";

type InvoiceLayoutProps = {
    data: InvoiceType;
    children: ReactNode;
};

export default function InvoiceLayout({ data, children }: InvoiceLayoutProps) {
    const { sender, receiver, details } = data;

    // Instead of fetching all signature fonts, get the specific one user selected.
    // const fontHref = details?.signature?.fontFamily
    //     ? `https://fonts.googleapis.com/css2?family=${details?.signature?.fontFamily}&display=swap`
    //     : "";

    // const head = (
    //     <>
    //         {details?.signature?.fontFamily && (
    //             <>
    //                 <link
    //                     rel="preconnect"
    //                     href="https://fonts.googleapis.com"
    //                 />
    //                 <link
    //                     rel="preconnect"
    //                     href="https://fonts.gstatic.com"
    //                     crossOrigin="anonymous"
    //                 />
    //                 <link href={fontHref} rel="stylesheet" />
    //             </>
    //         )}
    //     </>
    // );

    return (
        <>
            {/* <head>{head}</head> */}
            <section>
                <div className="flex flex-col p-4 sm:p-10 bg-white rounded-xl min-h-[60rem]">
                    {children}
                </div>
            </section>
        </>
    );
}
