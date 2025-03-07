import { Send, Settings2, SquareCheckBig } from 'lucide-react';
import { InteractiveHoverButton } from '../components/magicui/interactive-hover-button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"

  
function LandingPage() {
  return (
    <div className="flex flex-col gap-20">
        <section id='hero' className='flex flex-col gap-8 p-10 items-center justify-center'>

            <h1 className='text-8xl font-extrabold text-center text-accent-foreground py-6'>
                Find the Best Way to 
                <span className='text-primary'> Rearrange </span> 
                Students' Groups.
            </h1>
            
            <p className='max-w-prose text-center text-2xl text-accent-foreground py-6 '>
                Our simulator is a demonstration tool for our API. It lets  
                you input sample student requests and see which ones can be fulfilled,    
                while ensuring balanced group sizes and FIFO processing.
            </p>

            <InteractiveHoverButton className='my-6'>
                Get Started
            </InteractiveHoverButton>
            

        </section>


        <section id='howitworks' className='bg-primary p-8 pt-40 pb-60 flex flex-col items-center justify-center gap-20'>
            <h1 className='text-5xl pb-20 font-bold text-center text-white'>
                How It Works
            </h1>

            <Card className='max-w-[50%] h-60'>
                <CardHeader className='flex items-center justify-center gap-4'>
                
                    <CardTitle className='bg-primary border rounded-full text-white text-2xl h-14 w-14 flex items-center justify-center'><Send /></CardTitle>
                    <CardTitle className='text-2xl font-semibold'>Submit Your Requests</CardTitle>
                </CardHeader>

                <CardContent>
                    <p className='text-center'>Enter simulated student details, such as student ID, current group, and desired group. This step mimics how students would submit group-change requests in a real scenario.</p>
                </CardContent>
            </Card>

            <Card className='max-w-[50%] h-60'>
                <CardHeader className='flex items-center justify-center gap-4'>
                    <CardTitle className='bg-primary border rounded-full text-white text-2xl h-14 w-14 flex items-center justify-center'><Settings2 /></CardTitle>
                    <CardTitle className='text-2xl font-semibold'>Process Requests</CardTitle>
                </CardHeader>

                <CardContent>
                    <p className='text-center'>Our API processes the requests while enforcing two key rules: each group must maintain its student count, and requests are handled on a first-come, first-served basis.</p>
                </CardContent>
            </Card>


            <Card className='max-w-[50%] h-60'>
                <CardHeader className='flex items-center justify-center gap-4'>
                    <CardTitle className='bg-primary border rounded-full text-white text-2xl h-14 w-14 flex items-center justify-center'><SquareCheckBig /></CardTitle>
                    <CardTitle className='text-2xl font-semibold'>Review the Results</CardTitle>
                </CardHeader>

                <CardContent>
                    <p className='text-center'>Once processing is complete, the simulator displays the outcome. You’ll see which requests can be fulfilled based on the constraints—giving you a clear picture of the system’s performance.</p>
                </CardContent>
            </Card>



        </section>

        <section id='getstarted' className='py-60 flex flex-col items-center justify-center gap-12'>
            <h1 className='text-5xl font-bold text-center text-accent-foreground'>
                Ready to <span className='text-primary'>Explore</span> the Process?
            </h1>

            <p className='max-w-prose text-center text-lg text-accent-foreground '>
                Click the button below to start the simulation. This process mimics how you might interact with our API and see the results in real-time. The simulation is designed to help you understand the system's behavior and optimize your group-rearrangement requests.
            </p>

            <InteractiveHoverButton className=''>
                Get Started
            </InteractiveHoverButton>
        </section>


    </div>
  )
}

export default LandingPage