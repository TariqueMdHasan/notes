import {motion} from 'framer-motion'
import FeatureCard from './featureCard'
import i1 from '../../assets/smart.webp'
import i2 from '../../assets/sync.webp'
import i3 from '../../assets/team.webp'

function Feature1() {
  return (
        <div className='w-96 lg:w-11/12'>
            <motion.h1
                className='text-4xl font-bold text-center text-amber-50'
                initial={{opacity:0, y:30}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Everything You Need to Stay Organized
            </motion.h1>
            <motion.p
                className='text-blue-100 text-center pt-10 text-xl lg:text-2xl'
                initial={{opacity:0, y:30}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Powerful features designed to make note-taking effortless and your ideas easily accessible across all your devices.
            </motion.p>
            <div className='w-full p-5 flex gap-5 justify-center flex-wrap mt-10'>
                <FeatureCard 
                    src={i1}
                    alt=""
                    title="Smart Organization"
                    description="Automatically categorize and tag your notes. Find anything instantly with our intelligent search and filtering system."
                />
                <FeatureCard 
                    src={i2}
                    alt=""
                    title="Seamless Sync"
                    description="Access your notes anywhere, anytime. Real-time synchronization across all your devices keeps you productive on the go."
                />
                <FeatureCard 
                    src={i3}
                    alt=""
                    title="Team Collaboration"
                    description="Share notes and collaborate in real-time. Comment, edit together, and keep your team aligned with shared workspaces."
                />
            </div>
            
            
    </div>
  )
}

export default Feature1