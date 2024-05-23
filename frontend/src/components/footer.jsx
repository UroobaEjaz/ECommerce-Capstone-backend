
export default function Footer() {  

  //used reference from the chatgpt: https://chatgpt.com/c/f039b3f8-b499-438f-936b-d8b6419571eb
  // also used the nav bar styling from the components folder
    return (
      <div className="bg-black shadow-md p-4 flex justify-between items-center fixed bottom-0 left-0 w-full z-10 text-white ">
          <div className="flex-1 text-center">
            <span>© 2024 All rights reserved</span>
        </div>
    
      </div>
    );
}