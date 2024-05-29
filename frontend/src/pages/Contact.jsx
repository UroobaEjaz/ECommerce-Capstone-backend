/* The whole idea of making a contact is to create a chatbot that will answer the question and will
give the information about the help desk */

/* reference: https://www.youtube.com/watch?v=0XqSujRgVXI */







import React from "react";
import ChatBot from "react-simple-chatbot";

const Contact = () => {
  const steps = [
    {
      id: '1',
      message: 'Hello! How can I assist you today?',
      trigger: '2'
    },
    {
      id: '2',
      message: 'Please select an option:',
      trigger: 'options'
    },
    {
      id: 'options',
      options: [
        { value: 'option1', label: 'Option 1', trigger: '3' },
        { value: 'option2', label: 'Option 2', trigger: '4' }
      ]
    },
    {
      id: '3',
      message: 'You selected Option 1.',
      end: true
    },
    {
      id: '4',
      message: 'You selected Option 2.',
      end: true
    }
  ];

  return (
    <div>
      <h1>ChatBot Example</h1>
      <Segment floated= 'right'/>
      <ChatBot steps={steps} />
    </div>
  );
};

export default Contact;

