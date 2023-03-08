import HeroSign from '@/components/assets/HeroSign';
import Clients from '@/components/Clients';
import LetsConnect from '@/components/LetsConnect';
import Button from '@/components/utils/Button';
import Layout from '@/layout/Layout';

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section id='home-hero' className=' flex flex-col '>
        <div className='absolute right-5   top-14 '>
          <HeroSign />
        </div>

        <div className=' z-10 flex flex-col flex-1'>
          <div className='container'>
            <div className='py-[350px]'>
              <h1>
                <span className='text-title font-normal'>
                  Building Experiences for Industries
                </span>
                <br />
                <span className='text-heading1'>with Human Intervention</span>
              </h1>
              <p className='my-6 text-body1 max-w-[853px]'>
                Providing Human centered solutions while creating joyful
                experiences.
              </p>
            </div>
          </div>
          <div className='flex container flex-col justify-end  mt-auto flex-1  mb-[160px]'>
            <div className='flex justify-between'>
              <div>
                <h2 className='text-heading2 mb-16'>
                  Human Factors <br /> Research & Design
                </h2>
                <Button
                  animate
                  className='bg-light1 text-dark1'
                  text='Know Us More'
                />
              </div>

              <div className='max-w-[680px]'>
                <p className='text-body1'>
                  <span>
                    We are one of the finest Design Studios with a highly
                    talented team specializing in helping create delightfully
                    habit-forming products and solutions.
                  </span>
                  <br />
                  <br />
                  Solutions which are a harmonious interplay of interaction and
                  function, pleasure and reason with joy of use for its users
                  across a gamut of industries, governments and startups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*EOF HERO */}
      {/* Solutions */}
      <section className='container bg-light1 my-32'>
        <div>
          <h3 className='text-heading4 text-dark1 max-w-[760px]'>
            We have consistently been delivering successful and game changing
            products and solutions for our customers.
          </h3>
        </div>
      </section>
      {/*EOF Solutions */}
      <Clients />
      {/*Building Experiences */}
      <section className='py-32'>
        <div className='container flex justify-between  items-start '>
          <div>
            <h1 className='text-heading2 text-dark1 max-w-[864px]'>
              Building Experiences step by step
            </h1>
          </div>
          <div>
            <h3 className='text-body1 text-dark1 max-w-[524px]'>
              Working towards the success of our customer’s strategic vision and
              practical implementation of design.
            </h3>
          </div>
        </div>
      </section>
      {/*EOF Building Experiences */}
      <LetsConnect />
    </Layout>
  );
}
