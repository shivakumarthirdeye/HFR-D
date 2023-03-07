import HeroSign from '@/components/assets/HeroSign';
import Button from '@/components/utils/Button';
import Layout from '@/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <section className='home-hero flex flex-col '>
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
              <p className='my-6 text-body1'>
                Providing Human centered solutions while creating joyful <br />
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
                  className='bg-light1 text-dark1 mt hover:bg-blue1 hover:text-light1'
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
    </Layout>
  );
}
