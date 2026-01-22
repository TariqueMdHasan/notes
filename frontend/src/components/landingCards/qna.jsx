import {motion} from 'framer-motion'
import Hero2 from './hero2'

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
                Frequently Asked Questions
            </motion.h1>
            <motion.p
                className='text-blue-100 text-center pt-10 text-xl lg:text-2xl'
                initial={{opacity:0, y:30}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Everything you need to know about our note-taking app.
            </motion.p>
            <div className='w-full p-5 flex gap-5 justify-center flex-wrap mt-10'>
                <Hero2 
                    question="Is there free version available?" 
                    answer="Yes! Our free plan includes up to 100 notes, basic text 
                    formatting, cross-device sync, and search functionality. It's perfect 
                    for personal use and getting started with digital note-taking."
                    />
                    <Hero2 
                    question="How to secure my notes?" 
                    answer="Your notes are encrypted both in transit and at rest using 
                    industry-standard AES-256 encryption. We never have access to your 
                    unencrypted data, and all premium accounts include additional 
                    security features like two-factor authentication."
                    />
                    <Hero2 
                    question="What happens if i cancel my subscription?" 
                    answer="If you cancel Premium, your account will revert to the 
                    free plan at the end of your billing period. You'll keep all your 
                    notes, but some premium features like unlimited storage and collaboration 
                    will be limited. You can always upgrade again later."
                    />
                    <Hero2 
                    question="Do you offer customer support?" 
                    answer="Yes! Free users have access to our help center and community 
                    forums. Premium subscribers get priority email support with responses 
                    within 24 hours, plus access to live chat during business hours."
                    />
                    <Hero2 
                    question="What devices and plaforms are supported?" 
                    answer="Our app works seamlessly across all major platforms: iOS, 
                    Android, Windows, macOS, and Linux. There's also a web version that
                    works in any modern browser. All your notes sync automatically across all devices."
                    />
                    <Hero2 
                    question="What happens if i cancel my subscription?" 
                    answer="If you cancel Premium, your account will revert to the 
                    free plan at the end of your billing period. You'll keep all your 
                    notes, but some premium features like unlimited storage and collaboration 
                    will be limited. You can always upgrade again later."
                    />
                    <Hero2 
                    question="Do you offer customer support?" 
                    answer="Yes! Free users have access to our help center and community 
                    forums. Premium subscribers get priority email support with responses 
                    within 24 hours, plus access to live chat during business hours."
                    />
                    <Hero2 
                    question="What devices and plaforms are supported?" 
                    answer="Our app works seamlessly across all major platforms: iOS, 
                    Android, Windows, macOS, and Linux. There's also a web version that
                    works in any modern browser. All your notes sync automatically across all devices."
                    />
            </div>
            
            
            
    </div>
  )
}

export default Feature1