import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout to redirect after 7 seconds (7000 milliseconds)
    const timer = setTimeout(() => {
      navigate('/');
    }, 7000);

    // Cleanup the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <FaCheckCircle className="text-green-500" size={100} />
      <h1 className="text-4xl font-bold mt-4">Success!</h1>
      <p className="text-xl mt-2 text-center">Thank you for shopping at JK Convenience store</p>
    </div>
  );
};

export default SuccessPage;


// reference: https://www.google.com/search?q=cart+brad+traversy&sca_esv=c0f137e23ef54b4f&sca_upv=1&rlz=1C1OPNX_enCA1057CA1057&biw=1242&bih=545&tbm=vid&sxsrf=ADLYWIKU7v4tsyJT3k8aXwLQPNZvIWcOXg%3A1721924238881&ei=jnqiZpqiNYKa0PEP-fa4qA4&ved=0ahUKEwiaodrUy8KHAxUCDTQIHXk7DuUQ4dUDCA0&uact=5&oq=cart+brad+traversy&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIhJjYXJ0IGJyYWQgdHJhdmVyc3kyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGJ8FMgUQIRifBTIFECEYnwUyBRAhGJ8FSMxEUIkGWKlBcAJ4AJABAJgBjgGgAdwOqgEEMTQuNrgBA8gBAPgBAZgCFqACng-oAgrCAgcQIxgnGOoCwgIEECMYJ8ICCxAAGIAEGJECGIoFwgIKEAAYgAQYQxiKBcICCxAAGIAEGLEDGIMBwgIQEAAYgAQYsQMYgwEYigUYCsICCBAAGIAEGLEDwgIOEAAYgAQYsQMYgwEYigXCAgUQABiABMICDRAAGIAEGLEDGEMYigXCAg0QABiABBixAxiDARgKwgIHEAAYgAQYCsICChAAGIAEGLEDGArCAgcQABiABBgNwgIGEAAYDRgewgIIEAAYFhgKGB7CAgsQABiABBiGAxiKBcICCBAAGAUYDRgewgIIEAAYgAQYogTCAgQQIRgVwgIHECEYoAEYCpgDA4gGAZIHBDE1LjegB52FAQ&sclient=gws-wiz-video#fpstate=ive&vld=cid:23d906db,vid:hpLr23QY8fU,st:0