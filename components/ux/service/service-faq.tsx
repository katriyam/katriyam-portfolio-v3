import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const ServiceFaq = ({
  faq,
}: {
  faq: { question: string; answer: string }[]
}) => {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto w-full max-w-screen-lg">
        <h2 className="font-medium text-4xl leading-[1.15]! tracking-[-0.04em] md:text-[2.75rem]">
          Why Choose Katriyam
        </h2>

        <Accordion className="mt-6" defaultValue={['question-0']} multiple>
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export { ServiceFaq }
