/* The whole idea of making a contact is to create a chatbot that will answer the question and will
give the information about the help desk */

/* reference: https://www.youtube.com/watch?v=0XqSujRgVXI */



import React from "react";

import ChatBot from "react-simple-chatbot";

export default function Contact() {

  
    return (
      <div>
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Welcome to JK-convenience. How can I help you?',
              trigger: '2',
            },
            {
              id: '2',
              message: 'Please enter your query here',
              trigger: '3',
            },
            {
              id: '3',
              options: [
                { value: 'return', label: 'Do you want to return?', trigger: '4' },
                { value: 'complaint', label: 'Are you having a complaint?', trigger: '5' },
            
              ],
            },
            {
              id: '4',
              message: 'You selected Return. Please call us at `123-456-7890`, our agent will be at your service. Thank you.',
              end: true,
            },
            {
              id: '5',
              message: 'You selected Complaint. Please provide details of your complaint by calling us at `123-456-7890`',
              end: true,
            },
        
          ]}
          floating={true}
        />
      </div>
    );
  };
  

  