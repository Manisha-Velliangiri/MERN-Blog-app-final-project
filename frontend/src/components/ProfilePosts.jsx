

const ProfilePosts=()=>{
    return(
        <div className="w-full flex  mt-10  space-x-6">
        {/*left */}
        <div className="w-[35%] h-[200px]  flex justify-center items-center">
         <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neSUyMHNtYWxsJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="" className="h-full w-full object-cover" />
        </div>
         
          {/*right */}
         <div className="flex flex-col   w-[65%]">
            <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
            Latest developments in AI, machine learning, and blockchain.
            </h1>
            <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
             <p>@Manisha</p>
             <div className="flex space-x-2">
                <p>6/11/2023</p>
                <p>16:45</p>

             </div>
            </div>
            <p className="text-sm md:text-md">
            Delve into the forefront of tech evolution with our latest post! Explore groundbreaking developments in AI, machine learning, and blockchain—your guide to staying ahead in the digital revolution. Join us in uncovering the future of innovation! 🌐🚀 #TechInnovation #AIAdvancements






            </p>
             
         </div>


      </div>
    )
}
export default ProfilePosts