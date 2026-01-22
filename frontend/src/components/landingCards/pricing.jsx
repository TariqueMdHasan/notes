import {motion} from 'framer-motion'
import PricingCard from './pricingCard'

function Pricing() {
  return (
        <div className='w-96 lg:w-11/12'>
            <motion.h1
                className='text-4xl font-bold text-center text-amber-50'
                initial={{opacity:0, y:30}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Simple, Transparent Pricing
            </motion.h1>
            <motion.p
                className='text-blue-100 text-center pt-10 text-xl lg:text-2xl'
                initial={{opacity:0, y:30}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Choose the plan that fits your note-taking needs. Start free and upgrade when you're ready for more features.
            </motion.p>
            <div className='w-full p-5 flex gap-5 justify-center flex-wrap mt-10'>
                <PricingCard
                    title="Free"
                    price="0"
                    subtitle="Perfect for getting started"
                    features={[
                    "Up to 100 notes",
                    "Basic text formatting",
                    "Cross-device sync",
                    "Search functionality",
                    ]}
                    buttonText="Get Started Free"
                />
                <PricingCard
                    title="Premium"
                    price="9"
                    period="mo"
                    subtitle="For power users and professionals"
                    features={[
                    "Unlimited notes",
                    "Team collaboration",
                    "Priority support",
                    "Advanced security features",
                    ]}
                    buttonText="Start Premium Trial"
                    popular
                    gradient
                />
                <PricingCard
                    title="Premium Pro"
                    price="100"
                    period="yr"
                    subtitle="For industry"
                    features={[
                    "Multiple user",
                    "make your own setting",
                    "Remote control",
                    "Login anywhere",
                    "All from premium",
                    ]}
                    buttonText="Start Premium Pro"
                    
                />
            </div>
            
            
    </div>
  )
}

export default Pricing