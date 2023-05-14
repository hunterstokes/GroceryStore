import Navbar from "@/components/navbar"

export default function Hours() {
    return (
        <main>
            <Navbar />
            <section>
                <div>
                    <h3>Hours</h3>
                    <ul>
                        <li>Sunday:<p>9:00am - 7:00pm</p></li>
                        <li>Monday:<p>9:00am - 8:00pm</p></li>
                        <li>Tuesday:<p>9:00am - 8:00pm</p></li>
                        <li>Wednesday:<p>9:00am - 8:00pm</p></li>
                        <li>Thursday:<p>9:00am - 8:00pm</p></li>
                        <li>Friday:<p>9:00am - 8:00pm</p></li>
                        <li>Saturday:<p>9:00am - 8:00pm</p></li>
                    </ul>
                    
                </div>
            </section>
        </main>
    )
}