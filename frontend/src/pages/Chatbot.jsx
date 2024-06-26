/* The whole idea of making a contact is to create a chatbot that will answer the question and will
give the information about the help desk */

/* reference: https://www.youtube.com/watch?v=0XqSujRgVXI */
/* reference: https://www.youtube.com/watch?v=E0OL6qSgsb0 */
// used this reference to remove the strict mode to get the bot working once before that it was working twice
//npm install react-simple-chatbot styled-components --save
/*
import React from "react";

 import ChatBot from "react-simple-chatbot";

export default function Chatbot() {
  return (
    <div>
    <ChatBot steps={[
        {
          id: '1',
          message: 'Welcome to JK-convenience. How can I help you?',
          trigger: '2',
        },
        {
          id: '2',
          message: 'Please select your problem here',
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
          message: 'You selected Complaint. Please provide details of your complaint by calling us at `123-456-7890`.',
          end: true,
        },
      ]}
    />
    </div>
  );
} 
*/
//npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial, Helvetica, sans-serif",
  headerBgColor: "darkred",
  headerFontColor: "#fff",
  headerFontSize: "18px",
  botBubbleColor: "darkred",
  botFontColor: "#fff",
  userBubbleColor: "darkred",
  userFontColor: "#4a4a4a",
};

const ChatbotComponent = () => {
  const steps = [
    {
      id: "1",
      message: "Hello! How can I help you today?",
      trigger: "2",
    },
    {
      id: "2",
      message: "Please select an option:",
      trigger: "options",
    },
    {
      id: "options",
      options: [
        { value: "hours", label: "What are your store hours?", trigger: "3" },
        { value: "location", label: "Where are you located?", trigger: "4" },
        { value: "contact", label: "How can I contact you?", trigger: "5" },
      ],
    },
    {
      id: "3",
      message: "Our store hours are Monday to Friday, 9:00 AM to 6:00 PM.",
      trigger: "2",
    },
    {
      id: "4",
      message:
        "Our store is located at 123 Main Street, Anytown, USA. You can also find more details on our website.",
      trigger: "2",
    },
    {
      id: "5",
      message: "You can contact us at contact@example.com or call us at +1-123-456-7890.",
      trigger: "2",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        floating={true}
        headerTitle="Chat with Us"
        botDelay={1000}
        width="300px"
        height="400px"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          boxShadow: "0 8px 10px rgba(0,0,0,0.1)",
        }}
      />
    </ThemeProvider>
  );
};

export default ChatbotComponent;
