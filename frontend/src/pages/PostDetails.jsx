import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import Comment from "../components/Comment"

const PostDetails =()=>{
    return(
        <div>
        <Navbar/>
          <div className="px-8 md:px-[200px] mt-8">
          <div className="flex justify-between items-center">
           <h1 className="text-2xl font-bold text-black md:text-3xl">
           Latest developments in AI, machine learning, and blockchain.
           </h1>
          <div className="flex items-center justify-center space-x-2">
             <p><FaEdit /></p>
             <p><MdDelete/></p>
          </div>
          </div>
           <div className="flex items-center justify-between mt-2 md:mt-4">
           <p>@Manisha</p>
             <div className="flex space-x-2">
                <p>6/11/2023</p>
                <p>16:45</p>
            </div>
           </div>
            <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neSUyMHNtYWxsJTIwaW1hZ2VzfGVufDB8fDB8fHww"   alt="" className="w-full   mx-auto mt-8  " />
            <p className="mx-auto mt-8">
              
Navigating the Tech Horizon: Recent Advances in AI, ML, and Blockchain
In the dynamic world of technology, recent strides in AI, machine learning (ML), and blockchain are reshaping industries and sparking transformative shifts.
<br /><br />
1. Artificial Intelligence (AI) <br /> 
GPT-3: Language Redefined
GPT-3's breakthroughs in Natural Language Processing have opened new possibilities in content creation and chatbots.
<br />
AI in Healthcare
AI is a powerful ally in healthcare, enhancing diagnostics, drug discovery, and personalized medicine.

Ethical Considerations in AI
Ensuring transparency and addressing biases in AI algorithms is at the forefront of ethical considerations.
<br /><br />
2. Machine Learning (ML) <br />
Breakthroughs in Deep Learning
ML is experiencing breakthroughs in techniques, architectures, and optimization methods, expanding its capabilities.

Explainable AI (XAI)
A focus on making ML models interpretable through Explainable AI (XAI) addresses the complexity of modern models.

Federated Learning
Privacy-preserving Federated Learning is gaining traction, allowing models to be trained without centralizing raw data.
<br /><br />
3. Blockchain <br />
Rise of NFTs
Non-Fungible Tokens (NFTs) on blockchain redefine digital ownership, transforming art and collectibles.

Decentralized Finance (DeFi)
DeFi on platforms like Ethereum offers decentralized financial services, including lending and decentralized exchanges.

Blockchain Interoperability and Sustainability
Efforts to improve interoperability and address environmental concerns focus on sustainable blockchain practices.
<br /><br />
4. Looking Ahead: The Future Landscape <br />
In conclusion, these technological advances paint a vibrant picture of innovation. As we anticipate tomorrow, the interplay of AI, ML, and blockchain promises to redefine possibilities and shape our technological landscape.

Stay informed, as the journey of technological innovation continues, and these transformative technologies evolve.


            </p>
            <div className="flex items-center mt-8 space-x-4 font-semibold">
              <p>Categories:</p>
              <div className="flex justify-center items-center space-x-2">
                   <div className="bg-gray-300 rounded-lg px-3 py-1">Lifestyle</div>
                   <div className="bg-gray-300 rounded-lg px-3 py-1">Personal Development</div>
                   <div className="bg-gray-300 rounded-lg px-3 py-1">Finance</div>
                   <div className="bg-gray-300 rounded-lg px-3 py-1">Entertainment</div>

              </div>
            </div>
              <div className="flex flex-col mt-4">
                <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
               
               <Comment/>
               <Comment/>
            </div>

{/**write a comment */}
              <div className="w-ful flex flex-col mt-4 md:flex-row">
                 <input type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0" />
                 <button className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
              </div>

          </div>
        <Footer/>

        </div>
    )
}

export default  PostDetails