import React from 'react'

const Header = () => {
  return (

     <div className='absolute px-20 py-2 bg-gradient-to-b from-black z-10'>
      <img
        className='w-44'
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />
    </div>
  )
}

export default Header

// import React from "react";

// const Header = () => {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-black via-gray-900 to-transparent z-50 px-8 py-2 flex items-center">
//       <a href="/">
//         {/* <img
//           className="w-36 md:w-44"
//           src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
//           alt="Netflix Logo"
//         /> */}
//         <img
//   className="w-44 drop-shadow-[0_2px_4px_rgba(255,0,0,0.6)]"
//   src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
//   alt="Netflix Logo"
// />

//       </a>
//     </header>
//   );
// };

// export default Header;
