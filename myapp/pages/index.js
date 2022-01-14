import styles from "../components/css/Main.module.css";
import Image from "next/image";

function Home() {

  return (

    <>
      <section className={styles.welcome}>

        <div className={styles.welcomecontainer}>
          <span className={styles.welcomeheader}>Hello, Visitor!</span>
          <p className={styles.welcomesubheader}>Welcome to my person webpage. Scroll down to discover more about me.</p>
        </div>

      </section>


      <section className={styles.aboutme}>

        <div className={styles.aboutmeheadercon}>
          <span className={styles.aboutmeheader}>About Me</span>
        </div>

        <div className={styles.descontainer}>
          <div className={styles.textcontainer}>
            <p className={styles.textinfo}>
              Hello, my name is Brandon Figueredo. I&apos;m from Massachusets, USA. I&apos;m a student at the University of Massachusetts Amherst where I&apos;m studying Computer Science.
            </p>
            <p className={styles.textinfo}>
              I&apos;m really passionate about technology in general. I enjoy creating small scale webpages and applications that I can use in my daily life.
            </p>
            <p className={styles.textinfo}>
              I hope to continue learning new technologies and to gain experience in the tech industry to develop my skills.
            </p>
          </div>

          <img className={styles.portrait} src="/IMG_0239.JPG" alt="photo of brandon figueredo" />
        </div>

      </section>

      <section className={styles.portcontainer}>

        <div>
          <h1 className={styles.portheader}>Portfolio</h1>
          <p className={styles.portpar}>These are some of the projects I&apos;ve worked on.</p>
        </div>
      </section>

      <section className={styles.contactcontainer}>

        <div className={styles.sec1}>
          <div className={styles.demo1}>

            <img className="border-4 shadow-lg border-gray" src="/Animation2.gif" alt="Gif of UFit website" />
            <div className={styles.newlabel}></div>
          </div>
          <div className={styles.desc1con}>
            <h1 className={styles.desc1header}>UFit</h1>
            <p className={styles.desc1}>UFit is a web application for UMass students and staff to post about fit-related content. Share your new bench press achievement or keep up to date about sporting events at UMass. New to fitness? Make a post looking for a gym partner.</p>
          </div>
        </div>

        <div className={styles.sec2}>
          <div className={styles.demo2}>
            <img className="border-4 shadow-lg border-gray" src="/Animation3.gif" alt="Gif of UFit website" />
            <div className={styles.newlabel}></div>
          </div>
          <div className={styles.desc2con}>
            <h1 className={styles.desc2header}>Scourge of the Gods</h1>
            <p className={styles.desc2}>This Player vs Boss game is all about fighting and defeating a boss AI. Use your special abilities to navigate the map and attack the Turtle boss. Watch our for the fire breath!</p>
          </div>
        </div>

        <div className={styles.sec3}>
          <div className={styles.demo3}>
            <img className="border-4 shadow-lg border-gray" src="/Animation.gif" alt="Gif of Little Inspirations website" />
            <div className={styles.newlabel}></div>
          </div>
          <div className={styles.desc3con}>
            <h1 className={styles.desc3header}>Little Inspirations</h1>
            <p className={styles.desc3}>Little Inspirations is a family-owned daycare business that has been in operation for over 25 years. Offering professional child care, students from Little Inspirations learn and develop rapidly academically and socially.</p>
          </div>
        </div>
      </section>
    </>

  );
}

export default Home;
