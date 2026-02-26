import { Accordion } from '@zalify-ui/react'

export const App = () => {
  return (
    <Accordion.Root defaultValue={['What is Zalify UI?']} multiple>
      {faqItems.map((item) => (
        <Accordion.Item key={item.question} value={item.question}>
          <Accordion.ItemTrigger>
            {item.question}
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.answer}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

const faqItems = [
  {
    question: 'What is Zalify UI?',
    answer: 'A beautiful component library built with Ark UI and Panda CSS.',
  },
  {
    question: 'How do I get started?',
    answer: 'Visit our documentation for installation and usage guides.',
  },
  {
    question: 'Is it free to use?',
    answer: 'Yes! Zalify UI is completely free and open source.',
  },
]
