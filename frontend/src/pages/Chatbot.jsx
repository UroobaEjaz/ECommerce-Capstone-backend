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
      message:
        "You can contact us at contact@example.com or call us at +1-123-456-7890.",
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
