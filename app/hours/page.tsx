import Navbar from "@/components/navbar"

export default function Hours() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="flex flex-wrap">
            <section className="m-10">
                <div className="align-center flex-1 justify-center">
                    <h3 className=" text-lg font-bold">Hours</h3>
                    <ul className=" p-5">
                        <li>Sunday: 9:00am - 7:00pm</li>
                        <li>Monday: 9:00am - 8:00pm</li>
                        <li>Tuesday: 9:00am - 8:00pm</li>
                        <li>Wednesday: 9:00am - 8:00pm </li>
                        <li>Thursday: 9:00am - 8:00pm </li>
                        <li>Friday: 9:00am - 8:00pm </li>
                        <li>Saturday: 9:00am - 8:00pm </li>
                    </ul>
                    <h3>Address</h3>
                    <div className="px-10">   
                        <a className="mx-auto underline">4038 Piedmont Avenue <br></br>
                            Oakland, CA 94611
                        </a>
                        </div>
                    
                </div>
            </section>
            <section className="flex overflow-hidden align-middle justify-center">
            <iframe className="min-[50vw] max-[100vw]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.483036261295!2d-122.257493711145!3d37.8255762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857df771223c73%3A0xd3e80abfe62a087c!2sPiedmont%20Grocery%20Co!5e0!3m2!1sen!2sde!4v1684186508613!5m2!1sen!2sde" loading="lazy"></iframe>
            </section>
                </div>
        </main>
    )
}