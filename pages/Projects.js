import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/Home.module.css'

const Projects = () => {
  return (
    <div>
              <main className={styles.main}>
               <h1 className={styles.title}>
                  Our Projects
               </h1>
               </main>
               <section className={styles.projectContent}>
              <p>The far reaching technical advancements and career options in the industry always need knowledgeable, technically sound, creative and amazingly quick problem solving skilled engineers. Therefore, focusing of this aspects we are trying everyday to make innovative projects in different domains. By this we aim to make transformation of Theoretical Knowledge into its applications.
               <br /><br />
              Project work gives engineering solutions to the outcome of existing systems.We are trying to select projects that are related to the society oriented applications like heartbeat detector, LPG gas leakage detector and many more.
               <br /><br />
              Project work enables one to conduct oneself in a professional manner by analyzing, managing, evaluating the project related matters. Project implementation always makes use of the latest and more advanced technologies for controlling equipments and devices. Therefore, we believe in learning as well as teaching our fellow colleague.</p>
              </section>    
    </div>
    
  )
}

export default Projects