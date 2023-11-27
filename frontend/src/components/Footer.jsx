

const Footer = () =>{
    return(
        <>
        <div className="mt-8 w-full bg-black px-8 md:px-[500px] flex md:flex-row flex-col space-y-4 md:space-y-0 items-start  md:justify-between text-sm md:text-md py-8">
       <div className="flex flex-col text-white">
          <p>Featured Blogs</p>
          <p>Most viewed</p>
          <p>Readers choice</p>
       </div>

       <div className="flex flex-col text-white">
          <p>Forum</p>
          <p>Support</p>
          <p>Recent Posts</p>
       </div>

       <div className="flex flex-col text-white">
          <p>Privacy policy</p>
          <p>About Us</p>
          <p>Terms & Conditions</p>
       </div>
      </div>
      <p className="py-2 pb-2 text-center text-white bg-black">All-Rights reserved @log Market 2023</p>
        </>
      
    )
  }
  
  export default Footer
