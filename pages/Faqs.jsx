import React from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
} from '@chakra-ui/react';

const faqsData = [
  // Your FAQ data here
  {
    "id": 1,
    "title": "How does the project submission process work?",
    "description":
      "Users can submit their projects by creating an account, filling out project details, and uploading relevant files. Once reviewed, the project will be listed on the platform."
  },
  {
    "id": 2,
    "title": "How do I buy a project from the marketplace?",
    "description":
      "To purchase a project, users can browse the marketplace, select a project they're interested in, and click the 'Buy' button. They'll be prompted to complete the transaction securely."
  },
  {
    "id": 3,
    "title": "What kind of projects can be submitted on this platform?",
    "description":
      "You can submit a wide range of projects, from software applications to art, design, and even educational materials. However, please ensure your project complies with our content guidelines."
  },
  {
    "id": 4,
    "title": "How is payment handled?",
    "description":
      "Payment processing is typically handled through secure payment gateways. Users can use credit/debit cards, PayPal, or other payment methods to purchase projects."
  },
  {
    "id": 5,
    "title": "Are there any fees for listing or selling projects?",
    "description":
      "Depending on your platform's business model, there might be listing fees, transaction fees, or a commission structure for project sales. Make sure to clearly communicate these fees to users."
  },
  {
    "id": 6,
    "title":
      "What happens if I'm not satisfied with a purchased project?",
    "description":
      "You should have a clear refund or dispute resolution policy in place. Users may be eligible for refunds or support in case a project doesn't meet the specified criteria."
  },
  {
    "id": 7,
    "title": "Can I sell a project that I've already published elsewhere?",
    "description":
      "It depends on your platform's policies. Some platforms allow it, while others may require exclusive listings. Make sure to communicate this to sellers."
  },
  {
    "id": 8,
    "title": "How do I ensure the security and quality of projects on the platform?",
    "description":
      "Our platform have a review and approval process to ensure that projects meet quality and security standards. Users should also be able to report any suspicious or malicious content."
  }
];

const Faqs = () => {
  return (
    <Container maxW="container.lg">
      <Box bgColor="bgFAQ" py="4rem">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            
            <Accordion allowMultiple>
              {faqsData.map((faqs) => (
                <AccordionItem key={faqs.id}>
                  <h2>
                    <AccordionButton p="2rem" border="none" borderTop="2px solid #f2f2f2">
                      <Box
                        flex="1"
                        textAlign="left"
                        fontWeight="550"
                        fontSize="1rem"
                        color="white"
                        // marginLeft="2rem"
                      >
                        {faqs.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel px="1.5rem" my="0.5rem" pb={4} color="silver">
                    {faqs.description}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default Faqs;