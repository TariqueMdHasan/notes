import {motion} from 'framer-motion'
import ReviewCard from './reviewCard'
import Sarah from '../../assets/profilepic/sarah.webp'
import Marcus from '../../assets/profilepic/marcus.webp'
import Prof1 from '../../assets/profilepic/pf1.jpg'
import Prof2 from '../../assets/profilepic/pf2.jpg'

const reviews = [
  {
    avatar: Sarah,
    name: "Sarah Chen",
    role: "Product Manager",
    text:
      "This note app has completely revolutionized how I organize my thoughts and projects. The seamless sync across devices means I never lose an important idea, and the collaboration features have made team brainstorming so much more efficient",
  },
  {
    avatar: Marcus,
    name: "Marcus Rodriguez",
    role: "Freelance Writer",
    text:
      "As a writer, I need a reliable tool to capture inspiration whenever it strikes. This app's markdown support and powerful search make it incredibly easy to find and reference my notes. It's become an essential part of my creative workflow.",
  },
  {
    name: "Alex Thompson",
    role: "Student",
    text:
     "Perfect for organizing lecture notes and research. The tagging system helps me categorize everything, and the quick search saves me hours when studying for exams. Plus, the free plan has everything I need as a student!",
  },
  {
    avatar: Prof1,
    name: "Prof Sam",
    role: "Professor",
    text:
      "This note app has completely revolutionized how I organize my thoughts and projects. The seamless sync across devices means I never lose an important idea, and the collaboration features have made team brainstorming so much more efficient",
  },
  {
    avatar: Prof2,
    name: "Md Tarique",
    role: "wev developer",
    text:
      "As a writer, I need a reliable tool to capture inspiration whenever it strikes. This app's markdown support and powerful search make it incredibly easy to find and reference my notes. It's become an essential part of my creative workflow.",
  },
  {
    name: "Aman",
    role: "Student",
    text:
     "Perfect for organizing lecture notes and research. The tagging system helps me categorize everything, and the quick search saves me hours when studying for exams. Plus, the free plan has everything I need as a student!",
  },
  
];


function Reviews() {
  return (
        <div className='w-96 lg:w-11/12'>
            <motion.h1
                className='text-4xl font-bold text-center text-amber-50'
                initial={{opacity:0, y:30}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Trusted by our precious <span className='text-green-400'>users</span>
            </motion.h1>
            <motion.p
                className='text-blue-100 text-center pt-10 text-xl lg:text-2xl'
                initial={{opacity:0, y:30}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                See what our users are saying about how our note app has transformed their productivity and organization
            </motion.p>
            <div className="overflow-hidden w-full py-10">
                <motion.div
                    className="flex gap-6"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                    }}
                >
                    {reviews.map((review, i) => (
                        <ReviewCard key={`a-${i}`} {...review} />
                        ))}

                        {reviews.map((review, i) => (
                        <ReviewCard key={`b-${i}`} {...review} />
                    ))}
                </motion.div>
            </div>
            
            
    </div>
  )
}

export default Reviews