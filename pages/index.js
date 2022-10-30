import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AIRS 2.0</title>
        <meta name="description" content="Artificial Intelligence & Robotics Society" />
        <link rel="icon" href="/airs.png" />
      </Head>

      <section class="text-gray-600 body-font overflow-hidden mt-5">
        <div class="container px-10  mx-auto">
          <div class="flex flex-wrap -m-12">
            <div class="p-12 md:w-1/2 flex flex-col items-start">
              <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-black text-xs font-medium tracking-widest ">
                AIRS
              </span>
              <h2 class="sm:text-xl text-xl title-font font-medium text-gray-900 mt-4 mb-4 bg-yellow-200 p-2 rounded-lg">
                ABOUT US
              </h2>
              <div className="bg-gray-200 rounded-lg p-4">
              <p class="leading-relaxed mb-8  text-lg ">
                Innovation, Imagination and Application is the motto of this
                society. AIRS aims to teach and help students to understand the
                seemingly incomprehensible software development and electronic
                gadgets in the market today and also assists students in
                developing their own projects. We propose, like many top
                international universities as well as national universities, the
                “Society of AIRS” to meet this demand. Our School gives the
                students a through foundation in the basic and intermediate
                principles of computer and electronics engineering and provides
                them with hands-on-skills and experience practical aspects. It
                has been said “Technology is best when it brings people together
                and make the world much better.”
              </p>
              </div>
              <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"></span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm"></span>
              </div>
            </div>

            <div class="p-12 md:w-1/2 flex flex-col items-start">
              <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-black text-xs font-medium tracking-widest">
                AIRS
              </span>
              <h2 class="sm:text-xl text-xl title-font font-medium text-gray-900 mt-4 mb-4 bg-blue-300 p-2 rounded-lg ">
                OUR VISION
              </h2>
              <div className="bg-gray-200 rounded-lg p-2">
                <h6 class="leading-relaxed mb-8 text-lg ">
                  We AIRS are conducting various lectures, workshops and
                  mentorship programs to help students realize their projects.
                  The mission of the society is to expose students to challenges
                  and new technologies in the field of electronics and thus to
                  nurture and develop their skills set in this arena.
                  <ul className="mt-2">
                    <li className="mt-2">
                      1- Aim at bringing out the "technological best" in
                      students
                    </li>
                    <li className="mt-2">
                      2- The chief aim of the club is to bring the students out
                      of their rooms and to expose them to the challenges
                      awaiting them in the field of circuit designing, hardware
                      analysis and programming.
                    </li>
                    <li className="mt-2">
                      3- Aim at providing students with the basic knowledge of
                      electronics but also help them to use the basic concepts
                      to come up with something constructive and useful for the
                      society.
                    </li>
                    <li>
                      4- To conduct lecture series, workshops and also assign
                      projects to students.
                    </li>
                    <li className="mt-3">
                      5-Aim to find hidden talent and to utilize them for
                      teaching learning process.
                    </li>
                  </ul>
                </h6>
              </div>
              <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"></span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
