import Button from './utils/Button';
import Marquee from 'react-fast-marquee';
import client1 from '/public/assets/images/home/clients/1.png';
import client2 from '/public/assets/images/home/clients/2.png';
import client3 from '/public/assets/images/home/clients/3.png';
import client4 from '/public/assets/images/home/clients/4.png';
import client5 from '/public/assets/images/home/clients/5.png';
import client6 from '/public/assets/images/home/clients/6.png';
import client7 from '/public/assets/images/home/clients/7.png';
import client8 from '/public/assets/images/home/clients/8.png';
import client9 from '/public/assets/images/home/clients/9.png';
import client10 from '/public/assets/images/home/clients/10.png';
import client11 from '/public/assets/images/home/clients/11.png';
import client12 from '/public/assets/images/home/clients/12.png';
import client13 from '/public/assets/images/home/clients/13.png';
import client14 from '/public/assets/images/home/clients/14.png';
import client15 from '/public/assets/images/home/clients/15.png';
import client16 from '/public/assets/images/home/clients/16.png';
import client17 from '/public/assets/images/home/clients/17.png';
import client18 from '/public/assets/images/home/clients/18.png';
import client19 from '/public/assets/images/home/clients/19.png';
import client20 from '/public/assets/images/home/clients/20.png';
import client21 from '/public/assets/images/home/clients/21.png';
import client22 from '/public/assets/images/home/clients/22.png';
import client23 from '/public/assets/images/home/clients/23.png';
import client24 from '/public/assets/images/home/clients/24.png';
import client25 from '/public/assets/images/home/clients/25.png';
import client26 from '/public/assets/images/home/clients/26.png';
import client27 from '/public/assets/images/home/clients/27.png';
import client28 from '/public/assets/images/home/clients/28.png';
import client29 from '/public/assets/images/home/clients/29.png';
import client30 from '/public/assets/images/home/clients/30.png';
import client31 from '/public/assets/images/home/clients/31.png';
import client32 from '/public/assets/images/home/clients/32.png';
import client33 from '/public/assets/images/home/clients/33.png';
import client34 from '/public/assets/images/home/clients/34.png';
import client35 from '/public/assets/images/home/clients/35.png';
import client36 from '/public/assets/images/home/clients/36.png';
import client37 from '/public/assets/images/home/clients/37.png';
import client38 from '/public/assets/images/home/clients/38.png';
import client39 from '/public/assets/images/home/clients/39.png';
import client40 from '/public/assets/images/home/clients/40.png';
import client41 from '/public/assets/images/home/clients/41.png';
import client42 from '/public/assets/images/home/clients/42.png';
import client43 from '/public/assets/images/home/clients/43.png';
import client44 from '/public/assets/images/home/clients/44.png';
import client45 from '/public/assets/images/home/clients/45.png';
import client46 from '/public/assets/images/home/clients/46.png';
import client47 from '/public/assets/images/home/clients/47.png';
import client48 from '/public/assets/images/home/clients/48.png';
import client49 from '/public/assets/images/home/clients/49.png';
import client50 from '/public/assets/images/home/clients/50.png';
import client51 from '/public/assets/images/home/clients/51.png';

const clients = [
  {
    id: 1,
    image: client1,
    name: 'JetLine Group',
  },
  {
    id: 2,
    image: client2,
    name: 'DeepTarget',
  },
  {
    id: 3,
    image: client3,
    name: 'HDFC Bank',
  },
  {
    id: 4,
    image: client4,
    name: 'Karnataka Bank',
  },
  {
    id: 5,
    image: client5,
    name: 'HP',
  },
  {
    id: 6,
    image: client6,
    name: 'Honeywell',
  },
  {
    id: 7,
    image: client7,
    name: 'Bankiom',
  },
  {
    id: 8,
    image: client8,
    name: 'BORN',
  },
  {
    id: 9,
    image: client9,
    name: 'Carers',
  },
  {
    id: 10,
    image: client10,
    name: 'ABB',
  },
  {
    id: 11,
    image: client11,
    name: 'ABS.CBN',
  },
  {
    id: 12,
    image: client12,
    name: 'AnalyticEdge',
  },
  {
    id: 13,
    image: client13,
    name: 'Are Mother',
  },
  {
    id: 14,
    image: client14,
    name: 'Casamia',
  },
  {
    id: 15,
    image: client15,
    name: 'Congnizant',
  },
  {
    id: 16,
    image: client16,
    name: 'Datamynt',
  },
  {
    id: 17,
    image: client17,
    name: 'DheeYantra',
  },
  {
    id: 18,
    image: client18,
    name: 'Disney',
  },
  {
    id: 19,
    image: client19,
    name: 'Zapr',
  },
  {
    id: 20,
    image: client20,
    name: 'Radiowalla',
  },
  {
    id: 21,
    image: client21,
    name: 'State of Qatar',
  },
  {
    id: 22,
    image: client22,
    name: 'Emerson',
  },
  {
    id: 23,
    image: client23,
    name: 'Erosnow',
  },
  {
    id: 24,
    image: client24,
    name: 'Endress Houser',
  },
  {
    id: 25,
    image: client25,
    name: 'Ford',
  },
  {
    id: 26,
    image: client26,
    name: 'GE Health Care',
  },
  {
    id: 27,
    image: client27,
    name: 'Data Opinion',
  },
  {
    id: 28,
    image: client28,
    name: 'Hallmark',
  },
  {
    id: 29,
    image: client29,
    name: 'HDFC ERGO',
  },
  {
    id: 30,
    image: client30,
    name: 'INTEL',
  },
  {
    id: 31,
    image: client31,
    name: 'Jet Synthesys',
  },
  {
    id: 32,
    image: client32,
    name: 'Jet Synthesys',
  },
  {
    id: 33,
    image: client33,
    name: 'Goethe Institue',
  },
  {
    id: 34,
    image: client34,
    name: 'Metro',
  },
  {
    id: 35,
    image: client35,
    name: 'Benz',
  },
  {
    id: 36,
    image: client36,
    name: 'Microsoft',
  },
  {
    id: 37,
    image: client37,
    name: 'Next Echo',
  },
  {
    id: 38,
    image: client38,
    name: 'Nokia',
  },
  {
    id: 39,
    image: client39,
    name: 'One Music Ph',
  },
  {
    id: 40,
    image: client40,
    name: 'Omnilogy',
  },
  {
    id: 41,
    image: client41,
    name: 'Pepsi',
  },
  {
    id: 42,
    image: client42,
    name: 'Pulse',
  },
  {
    id: 43,
    image: client43,
    name: 'Quest',
  },
  {
    id: 44,
    image: client44,
    name: 'Redseal',
  },
  {
    id: 45,
    image: client45,
    name: 'RTA',
  },
  {
    id: 46,
    image: client46,
    name: 'Sadara',
  },
  {
    id: 47,
    image: client47,
    name: 'Safaricom',
  },
  {
    id: 48,
    image: client48,
    name: 'Samsung',
  },
  {
    id: 49,
    image: client49,
    name: 'Sirius Decisions',
  },
  {
    id: 50,
    image: client50,
    name: 'Tech Mahindra',
  },
  {
    id: 51,
    image: client51,
    name: 'Tizen',
  },
];

const Clients = () => {
  return (
    <section id='experiences'>
      <div className='container  flex flex-col lg:flex-row justify-between   items-start '>
        <div>
          <h1 className='text-body1 sm:text-heading4 md:text-heading3  xl:text-heading2 text-dark1 max-w-[864px]'>
            Creating unique experiences for every industry
          </h1>
          <div className='mt-16 hidden lg:block'>
            <Button
              animate
              text={`Let's Connect`}
              className='bg-light1 text-dark1'
            />
          </div>
        </div>

        <div>
          <h3 className='text-tinyText1 sm:text-body4 md:text-body2 xl:text-body1 mt-6 lg:mt-0 font-medium  text-dark1 max-w-[524px]'>
            Everyday, HFR&D team is creating a marvel for its customers
            somewhere in the world.
          </h3>
        </div>
        <div className='mt-6 lg:mt-16  lg:hidden'>
          <Button
            animate
            text={`Let's Connect`}
            className='bg-light1 text-dark1'
          />
        </div>
      </div>
      <div className='my-10'>
        <Marquee
          className='h-[100px] md:h-[120px] lg:h-[160px] xl:h-[180px] overflow-y-hidden'
          speed={50}
          direction='left'
        >
          {clients.slice(0, 21).map((item, idx) => {
            return (
              <img
                key={item.id}
                src={item.image.src}
                alt={item.name}
                title={item.name.toUpperCase()}
                className='mx-2 md:mx-10 lg:mx-12 scale-[.60] md:scale-[.70] lg:scale-75 xl:scale-100'
              />
            );
          })}
        </Marquee>
        <Marquee
          className='h-[100px] md:h-[120px] lg:h-[160px] xl:h-[180px] overflow-y-hidden'
          speed={50}
          direction='right'
        >
          {clients.slice(21).map((item, idx) => {
            return (
              <img
                key={item.id}
                src={item.image.src}
                alt={item.name}
                title={item.name.toUpperCase()}
                className='mx-4 md:mx-8 lg:mx-12 scale-[.60] md:scale-[.70] lg:scale-75 xl:scale-100'
              />
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;
