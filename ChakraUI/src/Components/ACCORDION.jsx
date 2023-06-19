import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

export default function ACCORDION() {
  return(
  <>
    <Accordion allowToggle width={400}>

        <AccordionItem>
            <h1>
            <AccordionButton>
            Hellow

             <AccordionIcon></AccordionIcon>
            </AccordionButton>
            </h1>
            <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos at eveniet aliquam voluptatum exercitationem quasi tenetur sit tempore, quod minus nesciunt praesentium rem ipsam reprehenderit quia enim saepe. Nihil, obcaecati?
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h1>
            <AccordionButton>
            Hellow

             <AccordionIcon></AccordionIcon>
            </AccordionButton>
            </h1>
            <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos at eveniet aliquam voluptatum exercitationem quasi tenetur sit tempore, quod minus nesciunt praesentium rem ipsam reprehenderit quia enim saepe. Nihil, obcaecati?
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h1>
            <AccordionButton>
            Hellow

             <AccordionIcon></AccordionIcon>
            </AccordionButton>
            </h1>
            <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos at eveniet aliquam voluptatum exercitationem quasi tenetur sit tempore, quod minus nesciunt praesentium rem ipsam reprehenderit quia enim saepe. Nihil, obcaecati?
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
  </>
  ) 
  ;
}
