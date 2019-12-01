import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
import imgSrc1 from '../images/h1.jpeg'
import imgSrc2 from '../images/h2.jpeg'
import imgSrc3 from '../images/h3.jpeg';
import userImg1 from '../images/m1.jpeg'
import userImg2 from '../images/m2.jpeg'
import userImg3 from '../images/m3.jpeg'
import anaImg from '../images/b1.jpeg'


function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="flex flex-col">

        <div className="flex flex-wrap">
          <div style={{fontSize: `6rem`, lineHeight: `5.4rem`}}>
            <div
              className="font-serif border-white border-b-4 hover:border-yellow-400">
              Locate
            </div>
            <div
              className="font-serif border-white border-b-4 hover:border-yellow-400">
              Work
            </div>
            <div
              className="font-serif border-white border-b-4 hover:border-yellow-400">
              Resolve
            </div>
          </div>
            <div
              className={`mt-3 border-l-4 sm:ml-auto border-yellow-400 pl-3 md:block  md:items-center w-full md:w-auto max-w-xs`}
              style={{ maxHeight: `12rem`}}
            >
            <p>
              505 Economics is a global consulting company. We create
              positive change through analytics.
                </p>

              <div className="mt-3">
                WANT TO TALK?
                CONTACT US
              </div>
            </div>
            </div>
            <div className="flex mt-8 w-full overflow-x-scroll">
                  <img
                    alt="Cat and human sitting on a couch"
                    className="block mr-auto
                border-b-8 border-yellow-400
                max-w-xs hd-img-h"
                    src={imgSrc1}
                    style={{objectFit: `cover`}}
                  />
              <img
                alt="Cat and human sitting on a couch"
                className="max-w-xs mx-4 border-b-8 border-yellow-400"
                src={imgSrc2}
                style={{ objectFit: `cover`}}
              />
                <img
                alt="Cat and human sitting on a couch"
                  className="max-w-xs block ml-auto border-b-8 border-yellow-400 "
                  src={imgSrc3}
                  style={{ objectFit: `cover`}}
                />
                </div>



                <div className="justify-center mt-12 bg-gray-100 my-3 p-4 italic flex font-serif flex-wrap"><p className="p-2 text-xl " style={{maxWidth: `15rem`}}>
                    Wherever you are we solve your problems! Bla bla
                    bla bla bla bla bla
                  </p>

                  <img className="rounded-full max-w-xxs"
                    src={userImg1}
                    style={{maxHeight: `11rem`,
                      objectFit:`cover`}}/>

                  <img className="max-w-xxs my-2 sm:my-0 rounded-full mx-2"
                    src={userImg2}
                    style={{
                        maxHeight: `11rem`,
                       objectFit:`cover`
                  }}/>
                <img className="rounded-full max-w-xxs "src={userImg3}
                  style={{maxHeight: `11rem`,
                    objectFit:`cover`}}/>

                </div>

                <div className="mt-8 bg-gray-100 my-3 p-4 flex flex-wrap">

                  <img
                    className="border-yellow-400 border-b-8 mr-3 float-right"
                    src={anaImg} style={{maxWidth: `12rem`}}></img>

                  <p className="mt-3 max-w-xl sm:mt-0">
                    <h3 className="text-2xl">About:</h3>
                    505 Economics is an economic consultancy specialised in supporting governments in developing countries. The consultancy develops solutions for policymakers in challenging environments where traditional data sources cannot be utilised or data quality is low. It produces reliable macroeconomic forecasts, evaluates economic policies and develops modern policy simulation tools. The primary objective of 505 economics is to build capacity and train governments to become fully independent.
                  </p>
                </div>

      </section>
    </Layout>
  );
}

export default IndexPage;

