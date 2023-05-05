/** @format */
import SvgComponent from '../components/SvgComponent'
import Article from './Article'
import img from './ne.gif'
import img2 from './img2.png'

function HomePage() {
  return (
    <>
      <div className=" appear backdrop-blur-xl overflow-hidden mt-10 w-12 pt-[10rem] pr-[50rem] sm:pt-20 sm:pr-0 sm:w-[45rem] sm:h-[30rem] rounded-lg">
        <SvgComponent />
        {/* <Article /> */}
        {/* <div className="p-5 w-screen h-[75vh] md:w-[45rem] backdrop-blur-[2px] rounded-sm">
        <div className="appear h-full justify-center ">
          <br className="md:hidden" />
          <p className="text-3xl text-center font-semibold">
            Why Erasmus Montpellier's website ?
          </p>
          <div className="text-justify pt-[1.5rem] pb-[5rem] flex flex-col gap-[0.7rem]">
            <div className="p-[1.5rem]">
              <ul className="list-disc list-inside">
                <li>To Build</li>
                <li>What's needed ?</li>
                <li>Front, Vercel, Boiler Romm</li>
                <li>Responsive</li>
                <li>Ryan Air, Manchester to Leeds</li>
                <li>National Express</li>
                <li>Event Page</li>
                <li>Homepage, Navbar, Events Page</li>
                <li>WIP, What's Next ? </li>
              </ul>
            </div>
            <div>
              <p className="p-[0.5rem] text-xl font-semibold">To Build</p>
              <p className="pl-[0.7rem]">
                {' '}
                I started learning React through making small projects and
                studying the language, a close friend of mine told me about the
                university association he's started, aiming to provide students
                a place where they can link with each other and with local
                students. It was obvious that it implied a website at some
                point. It was the perfect opportunity for me to begin a bigger
                project, useful for others in real life.
              </p>
            </div>
            <div>
              <p className="p-[0.5rem] text-xl font-semibold">
                What's needed ?
              </p>
              <p className="pl-[0.7rem]">
                I wanted to provide a platform containing the main part of the
                Association's digital face, giving the user an easier access to
                services, for the organization to manage quickly. My friend,
                besides all the association's free services, wanted to be able
                to sell events and products, and also an access to a users
                database. It is still in the realm of simple websites.
                <br />
                It is still in the realm of simple websites.
              </p>
            </div>
            <div>
              <p className="p-[0.5rem] text-xl font-semibold">
                Front, Vercel, Boiler Room
              </p>
              <p className="pl-[0.7rem]">
                React, like for this web page, is the framework used. The theme
                would be important, I discovered this UI library, NextUI, based
                on Vercel's works. Boiler Room organizes club events throughout
                the world, I like their website's clean and simple layout, which
                is still a popular one.
              </p>
            </div>
            <div>
              <p className="p-[0.5rem] text-xl font-semibold">Responsive</p>
              <p className="pl-[0.7rem]">
                From experience and what we have seen, the student's rarely use
                their phones to plan their personal life, especially plans to go
                out, join friends or visit places. Responsiveness, and the phone
                layout were very important, which I was happy about, deep in my
                mind thinking about pushing the project forward and create an
                app (React Native 👀)
              </p>
            </div>
            <div>
              <p className="p-[0.5rem] text-xl font-semibold">
                Ryan Air, Manchester to Leeds
              </p>
              <p className="pl-[0.7rem]">
                I will be speaking from a user's perspective. Traveling implied
                booking flights and transports. Traveling to the UK might imply
                the use of apps that are a good source of headache to me, and a
                day before I began working on this website, I went to the UK. On
                Ryan Air's app to book a flight, from selecting the flight to
                the payment part, I have to go each time by extra steps that are
                not necessary; car rental, insurance, hotel booking, taxis.
                However, these steps are good for Ryan Air's economics. I
                concluded with "Some processes must take the tangent and make
                the steps as few as possible". If a user needs to buy access to
                an event ? He does, no additional steps. He wants to buy some
                product ? He does, no "add to cart" implied. He needs a cart ?
                He gets one and can buy many things at once. Directly, making
                the extra steps as options, not a necessity.
              </p>
            </div>
            <div className="flex">
              <div className="mr-[1rem]">
                <p className="p-[0.5rem] text-xl font-semibold">
                  National Express
                </p>
                <p className="pl-[0.7rem]">
                  An app that I have to use much more. National express charges
                  1£ per booking, or at least used to. So let's see what I am
                  paying for.
                  <ul className="mb-[0.5rem] leading-tight list-disc list-inside">
                    <li>Won't talk about the look, it's personal taste.</li>
                    <li>
                      Booking summary tab pops up, can't go down and takes half
                      of my screen.
                    </li>
                    <li>
                      Don't want to reserve my seat, still sending me to the
                      seat reserve tab.
                    </li>
                    <li>Same as Ryan Air, too much extra steps.</li>
                    <li>
                      Through all the steps, I am confused about what is
                      happening.
                    </li>
                  </ul>
                  What I retain ?
                  <ul className="list-disc list-inside leading-tight">
                    <li>
                      Don't try to be sophisticated to end up building broken
                      products
                    </li>
                    <li>
                      Information on the UI must speak clearly to the user
                    </li>
                  </ul>
                </p>
              </div>
              <img
                src={img}
                className=" h-[50vh] mt-[0.5rem] rounded-xl"
                alt="national express"
              />
            </div>
            <div>
              <p className="p-[0.5rem] text-xl font-semibold">Event Page</p>
              <p className="pl-[0.7rem]">
                No chit chat, the event page needs to be "straight to the
                point", still providing the necessary information to the user. A
                user's needs to know what's the event about, when and where,
                who's coming. The project is still work in progress phase, looks
                like the following :
              </p>
              <div className="w-full mt-[0.7rem] mb-[1rem] flex justify-center">
                <img
                  src={img2}
                  className="h-[50vh] mt-[0.5rem] rounded-xl"
                  alt="quick look at event page"
                />
              </div>
            </div>
            <div>
              <p className="p-[0.5rem] text-xl font-semibold">
                Homepage, Navbar, Events Page
              </p>
              <p className="pl-[0.7rem]">
                For now, the homepage is quite simple, reckon will get rid of
                About and Contact Us on the Navbar and only show these section
                on the homepage. There will be a page containing all events and
                products. Another for all the relevant media.
              </p>
            </div>
            <div>
              <p className="p-[0.5rem] text-xl font-semibold">
                WIP and what's next
              </p>
              <p className="pl-[0.7rem]">
                This project is still in early state, this article will be
                updated as I make progress. What's coming on this web site :
                <ul className="list-disc list-inside">
                  <li>
                    {' '}
                    A full user page UI, with preferences, the joined events,
                    alerts etc..
                  </li>
                  <li>
                    Using strip, no need to go to an external address to
                    purchase a product.
                  </li>
                  <li>
                    Typescript : Would like to type my variables, create
                    interfaces, getting close to a clean and readable code as
                    much as possible, while improving the functional programming
                    thinking.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </>
  )
}

export default HomePage
// pr-[40rem]
