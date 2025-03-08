import { Send, Settings2, SquareCheckBig } from 'lucide-react';
import { InteractiveHoverButton } from '../components/magicui/interactive-hover-button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"
import { BlurFade } from '../components/magicui/blur-fade';
  
function LandingPage() {
  return (
    <div className="flex flex-col gap-20">
        <section id='hero' className='flex flex-col gap-8 p-10 py-4 items-center justify-center'>
            <BlurFade  delay={0.25}inView>
                <h1 className='md:text-8xl text-6xl font-extrabold text-center text-accent-foreground py-6'>
                    Find the Best Way to 
                    <span className='text-primary'> Rearrange </span> 
                    Students' Groups.
                </h1>
            </BlurFade>

            <BlurFade  delay={0.5} inView>
                <p className='max-w-prose text-center md:text-2xl text-lg text-accent-foreground py-6 '>
                    Our simulator is a demonstration tool for our API. It lets  
                    you input sample student requests and see which ones can be fulfilled,    
                    while ensuring balanced group sizes and FIFO processing.
                </p>
            </BlurFade>

            <BlurFade  inView>
                <InteractiveHoverButton className='my-6'>
                    Get Started
                </InteractiveHoverButton>
            </BlurFade>
            

        </section>


        <section id='howitworks' className='bg-primary p-8 pt-40 pb-60 flex flex-col items-center justify-center gap-32 text-center'>
            <BlurFade  inView>
                <h1 className='text-5xl pb-20 font-bold text-center text-white'>
                    How It Works
                </h1>  
            </BlurFade>

            <BlurFade  className='flex items-center justify-center' inViewMargin='-40%' inView>
                <Card className='lg:max-w-[50%] max-w-[80%]'>
                    <CardHeader className='flex items-center justify-center gap-4'>
                    
                        <CardTitle className='bg-primary border rounded-full text-white text-2xl h-14 w-14 flex items-center justify-center'><Send /></CardTitle>
                        <CardTitle className='text-2xl font-semibold'>Submit Your Requests</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className='text-center'>Enter simulated student details, such as student ID, current group, and desired group. This step mimics how students would submit group-change requests in a real scenario.</p>
                    </CardContent>
                </Card>
            </BlurFade>

            <BlurFade className='flex items-center justify-center' inViewMargin='-40%' inView>
                <Card className='lg:max-w-[50%] max-w-[80%]'>
                    <CardHeader className='flex items-center justify-center gap-4'>
                        <CardTitle className='bg-primary border rounded-full text-white text-2xl h-14 w-14 flex items-center justify-center'><Settings2 /></CardTitle>
                        <CardTitle className='text-2xl font-semibold'>Process Requests</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className='text-center'>Our API processes the requests while enforcing two key rules: each group must maintain its student count, and requests are handled on a first-come, first-served basis.</p>
                    </CardContent>
                </Card>
            </BlurFade>

            <BlurFade className='flex items-center justify-center' inViewMargin='-40%' inView>
                <Card className='lg:max-w-[50%] max-w-[80%]'>
                    <CardHeader className='flex items-center justify-center gap-4'>
                        <CardTitle className='bg-primary border rounded-full text-white text-2xl h-14 w-14 flex items-center justify-center'><SquareCheckBig /></CardTitle>
                        <CardTitle className='text-2xl font-semibold'>Review the Results</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className='text-center'>Once processing is complete, the simulator displays the outcome. You’ll see which requests can be fulfilled based on the constraints—giving you a clear picture of the system’s performance.</p>
                    </CardContent>
                </Card>
            </BlurFade>

        </section>

        <section id='getstarted' className='py-60 flex flex-col items-center justify-center gap-12 px-10'>

            <BlurFade  inView>
                <h1 className='md:text-5xl text-3xl font-bold text-center text-accent-foreground'>
                        Ready to <span className='text-primary'>Explore</span> the Process?
                </h1>  
            </BlurFade>

            <BlurFade delay={0.25} inView>
                <p className='max-w-prose text-center md:text-lg text-accent-foreground'>
                    Click the button below to start the simulation. This process mimics how you might interact with our API and see the results in real-time. The simulation is designed to help you understand the system's behavior and optimize your group-rearrangement requests.
                </p>
            </BlurFade>
            
            <BlurFade delay={0.5} inView>
                <InteractiveHoverButton className='my-6'>
                    Get Started
                </InteractiveHoverButton>
            </BlurFade>


        </section>


    </div>
  )
}

export default LandingPage