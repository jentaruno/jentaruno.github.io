import SpotlightBlock from "@/components/reusable/spotlightBlock";
import ContactForm from "@/components/contactForm";
import React from "react";

export function UBCCMFeatRequest() {
    return <div id={"feature-request"} className={"flex flex-col pt-20"}>
        <SpotlightBlock>
            <h3 className={"md:text-5xl font-bold mb-8"}>
                🙌
                <br/>
                UBC Course Matcher
                <br/>
                Feature Request
            </h3>
            <ContactForm/>
        </SpotlightBlock>
    </div>;
}