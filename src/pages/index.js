import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
const imgSrc1 = `https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80`
const imgSrc2 = `https://images.unsplash.com/photo-1571756407234-46f229d6b801?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3738&q=80`
const imgSrc3 = `https://images.unsplash.com/photo-1551567600-e8e6af44c84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2891&q=80`

const userImg1 = `https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3734&q=80`

const userImg2 = `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3648&q=80`

const userImg3 = `https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80`

const anaImg  = `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3820&q=80`;



function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="flex flex-col">

        <div className="flex">
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
              className={`border-l-4 ml-auto border-yellow-400 pl-3 md:block  md:items-center w-full md:w-auto`}
              style={{maxWidth:`11rem`, maxHeight: `12rem`}}
            >
            <p>
              505 Economics is a global consulting company. We create positive change through analytics.
                </p>

              <div className="mt-3">
                WANT TO TALK?
                CONTACT US
              </div>
            </div>
            </div>
            <div className="flex mt-8">
                  <img

                alt="Cat and human sitting on a couch"
                className="block mr-auto
                border-b-8 border-yellow-400

                "
                    src={imgSrc1}
                    style={{maxWidth: `17rem`, objectFit: `cover`}}
                  />
              <img
                alt="Cat and human sitting on a couch"
                className="border-b-8 border-yellow-400"
                src={imgSrc2}
                style={{maxWidth: `17rem`, objectFit: `cover`}}
              />
                <img
                alt="Cat and human sitting on a couch"
                  className="block ml-auto border-b-8 border-yellow-400 "
                  src={imgSrc3}
                  style={{maxWidth: `13rem`, objectFit: `cover`}}
                />
                </div>



                <div className="mt-12 bg-gray-100 my-3 p-4 italic flex font-serif"><p className="p-2 text-xl " style={{minWidth: `15rem`}}>Wherever you are we solve your problems! Bla bla bla bla bla bla bla</p>

                  <img className="rounded-full"
                    src={userImg1}
                    style={{maxHeight: `11rem`,
                      maxWidth: `11rem`, objectFit:`cover`}}/>
                  <img className="-mx-4 rounded-full mx-2"
                    src={userImg2}
                    style={{maxHeight: `11rem`,
                      maxWidth: `11rem`, objectFit:`cover`
                  }}/>
                <img className="rounded-full"src={userImg3}
                  style={{maxHeight: `11rem`, maxWidth: `11rem`,
                    objectFit:`cover`}}/>

                </div>

                <div className="mt-8 bg-gray-100 my-3 p-4 flex ">

                  <img
                    className="border-yellow-400 border-b-8 mr-3 float-right"
                    src={anaImg} style={{maxWidth: `12rem`}}></img>

                  <p>
                    <h3 className="text-2xl">About: </h3>
                    505 Economics is an economic consultancy specialised in supporting governments in developing countries. The consultancy develops solutions for policymakers in challenging environments where traditional data sources cannot be utilised or data quality is low. It produces reliable macroeconomic forecasts, evaluates economic policies and develops modern policy simulation tools. The primary objective of 505 economics is to build capacity and train governments to become fully independent.
                  </p>
                </div>

      </section>
    </Layout>
  );
}

export default IndexPage;

