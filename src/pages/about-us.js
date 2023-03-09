import Clients from '@/components/Clients';
import LetsConnect from '@/components/LetsConnect';
import Button from '@/components/utils/Button';
import Layout from '@/layout/Layout';
import Link from 'next/link';
import React from 'react';
import aboutUsHero from '/public/assets/images/about-us/about-hero.png';
import founder from '/public/assets/images/founder/founder.png';

const AboutUs = () => {
  return (
    <Layout dark>
      <section className=' flex flex-col '>
        {/* <div className='absolute right-5  top-96  lg:top-14 '>
          <HeroSign />
        </div> */}

        <div className=' z-10 flex flex-col flex-1'>
          <div className='container'>
            <div className='pt-[100px]'>
              <h1 className=' text-dark1'>
                <span className='text-heading4 md:!font-normal md:text-heading3 lg:text-heading2 xl:text-title '>
                  We don&apos;t break the mold,
                  <span className='xl:hidden'>&nbsp;</span>
                </span>
                <br className='hidden 2xl:block' />
                <span className='text-heading4 lg:!font-bold md:text-heading3 lg:text-heading2 xl:text-heading1'>
                  We change the mold.
                </span>
              </h1>
              <p className='my-2 md:my-6   text-dark1 text-tinyText1 sm:text-body4 md:text-body2 xl:text-body1 max-w-[853px]'>
                Working with you as a part of your team to create delightfully
                habit forming solutions for all your problems.
              </p>
            </div>
          </div>
          <div className='my-6 md:my-12'>
            <img src={aboutUsHero.src} alt='' className='w-full' />
          </div>

          <div className='flex container flex-col   md:mt-6 xl:mt-12 text-dark1 justify-end  flex-1  '>
            <div className='flex flex-col xl:flex-row justify-between'>
              <div className='relative w-fit'>
                <h2 className='text-body1  md:text-heading4 lg:text-heading3 xl:text-heading2 '>
                  Human Factors <br /> Research & Design
                </h2>
                <div className='my-4 lg:hidden '>
                  <div className='absolute h-[2px] w-full bg-blue1  lg:hidden '></div>
                </div>
              </div>

              <div className='max-w-[680px] mt-6 xl:mt-0'>
                <p className='lg:text-left text-tinyText1 sm:text-body4 md:text-body2 xl:text-body1'>
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
      <section id='founder' className='!py-0 text-dark1'>
        <div className='container flex justify-between relative h-full  '>
          <div className='self-center mt-[-210px]'>
            <h1 className='text-heading2'>Sabina N B</h1>
            <div className='relative w-fit'>
              <p className='text-body2'>Founder & Director</p>
              <div className='w-full h-[3.2px] bg-dark1 mt-5'></div>
            </div>
          </div>
          <div className='my-[100px]'>
            <h1 className='text-heading2'>Meet Our Founder</h1>
            <p className='my-40 text-heading3 max-w-[708px]'>
              <svg
                width='65'
                height='53'
                viewBox='0 0 65 53'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M0 26.5V53L13.4235 39.7676L26.847 26.5353V13.2676V0H13.4235H0V26.5ZM38.153 26.5V53L51.5765 39.7676L65 26.5353V13.2676V0H51.5765H38.153V26.5Z'
                  fill='#1A1A1A'
                />
              </svg>
              <br />
              Building worlds of People for people and all else as peripheral
              systems, inside out.
            </p>
          </div>
        </div>
        <div>
          <img
            src={founder.src}
            style={{ mixBlendMode: 'luminosity' }}
            alt=''
            className='absolute left-[42%] bottom-0 translate-x-[-50%]'
          />
        </div>
        <div className='absolute left-0 top-0'>
          <svg
            width={940}
            height={1000}
            viewBox='0 0 940 1000'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g
              style={{
                mixBlendMode: 'color-burn',
              }}
            >
              <path
                d='M411.707 1040.22L411.757 1040.25L411.807 1040.28C423.092 1046.32 444.563 1063.32 475.416 1091.56C522.147 1140.48 562.164 1173.99 594.897 1192.31C599.993 1195.16 605.239 1197.79 610.381 1200.21C592.592 1247.91 564.682 1291.67 525.251 1332.71C453.851 1403.71 368.017 1439.08 268.115 1439.08C166.694 1439.08 81.3215 1403.68 9.90973 1332.62L9.89658 1332.61L9.88338 1332.6C-61.9624 1261.58 -97.0546 1176.2 -97.0546 1075.78C-97.0546 975.781 -62.3934 888.261 7.2998 812.74C76.5662 737.68 180.598 686.374 320.749 660.277L386.095 658.47C394.561 658.236 401.302 651.306 401.302 642.837V569.699C401.302 561.081 394.359 554.173 385.862 554.047C330.332 553.221 284.258 545.55 248.167 531.458L248.144 531.449L248.122 531.441C211.075 517.156 169.796 487.236 124.858 439.155L124.838 439.134L124.819 439.114C81.1978 392.909 59.2639 338.114 59.2639 274.175C59.2639 209.882 82.0744 155.687 127.005 110.97C172.438 66.2384 226.946 43.9878 290.656 43.9878C354.912 43.9878 408.924 65.7897 454.327 110.502L454.343 110.517L454.359 110.533C479.005 134.611 496.299 161.159 507.981 189.849L518.328 185.636L507.981 189.849C511.179 197.701 520.161 201.766 528.285 198.553L599.107 170.541C606.717 167.53 610.854 159.045 608.162 151.073C593.586 107.91 568.459 69.6872 532.698 35.0678C465.94 -30.8363 385.224 -64.171 291.146 -64.171C197.077 -64.171 115.821 -30.8389 49.5097 35.6395C-16.7434 101.57 -50.3028 181.44 -50.3028 273.688C-50.3028 366.402 -25.2146 441.108 26.7204 495.878C67.6449 539.882 108.6 573.014 149.359 594.874C62.254 627.396 -10.6003 674.078 -67.3697 735.108C-158.45 831.232 -204.171 944.635 -204.171 1074.32C-204.171 1204.54 -157.91 1316.13 -65.6324 1407.95L-65.6217 1407.96L-65.6109 1407.97C27.1284 1499.75 138.735 1545.77 269.095 1545.77C399.031 1545.77 510.643 1498.72 602.863 1406.46C657.901 1351.69 697.299 1289.74 719.89 1221.08C734.102 1219.98 748.483 1217.16 762.946 1213.35L762.991 1213.34L763.035 1213.33C823.105 1196.98 868.732 1162.01 898.191 1109.11C918.155 1074.94 928.571 1039.41 928.571 1001.66C928.571 982.446 925.444 962.483 920.394 942.38L920.358 942.237L920.318 942.094C903.847 883.196 868.643 838.349 815.102 808.61C780.722 788.716 745.024 778.877 708.648 778.877C690.042 778.877 672.485 781.626 654.835 786.148C647.793 787.952 643.044 794.335 643.124 801.443L643.999 878.454C644.117 888.824 653.959 895.946 663.64 893.461C679.638 889.354 693.707 887.523 707.669 887.523C728.348 887.523 746.995 892.42 763.348 901.636C790.805 917.785 808.901 940.762 816.915 970.352C819.727 981.562 821.454 991.757 821.454 1001.66C821.454 1019.94 816.218 1038.55 805.743 1057.13C790.096 1084.69 767.091 1102.34 736.078 1110.84L736.055 1110.84L736.032 1110.85C724.786 1113.98 714.035 1115.32 703.748 1115.32C685.15 1115.32 666.52 1110.48 649.128 1100.27L648.949 1100.17L648.766 1100.07C632.054 1091.08 605.629 1070.13 568.471 1036.09C526.811 992.711 492.123 962.989 464.63 948.004C436.219 932.081 406.443 923.693 375.921 923.693C359.575 923.693 342.415 926.309 325.475 930.905C276.948 943.892 240.304 972.632 214.396 1016.46L214.321 1016.58L214.25 1016.71C198.333 1045.32 189.32 1074.97 189.32 1105.52C189.32 1121.31 191.95 1137.93 197.083 1154.86C209.589 1203.37 236.903 1239.58 278.923 1262.57L278.93 1262.58C305.367 1277.02 332.184 1284.42 360.24 1284.42C376.541 1284.42 392.241 1282.11 408.502 1278.02C414.892 1276.42 419.483 1271.01 420.193 1264.61L428.048 1193.83C429.171 1183.72 420.551 1175.39 410.636 1176.55C398.195 1178 387.562 1178.7 377.391 1178.7C357.435 1178.7 342.308 1175.46 332.216 1170.29C316.008 1161.13 305.101 1147.15 299.475 1126.48L299.443 1126.36L299.409 1126.25C297.172 1118.68 295.947 1111.48 295.947 1105.03C295.947 1093.1 299.217 1080.99 306.994 1068.52L307.102 1068.35L307.203 1068.18C317.579 1050.11 332.354 1037.99 352.755 1032.47C359.655 1030.76 367.037 1029.9 373.96 1029.9C386.563 1029.9 398.94 1033.22 411.707 1040.22ZM321.261 660.181C321.258 660.182 321.254 660.183 321.25 660.183C321.254 660.183 321.258 660.182 321.261 660.181Z'
                fill='#3E66DF'
              />
              <path
                d='M411.707 1040.22L411.757 1040.25L411.807 1040.28C423.092 1046.32 444.563 1063.32 475.416 1091.56C522.147 1140.48 562.164 1173.99 594.897 1192.31C599.993 1195.16 605.239 1197.79 610.381 1200.21C592.592 1247.91 564.682 1291.67 525.251 1332.71C453.851 1403.71 368.017 1439.08 268.115 1439.08C166.694 1439.08 81.3215 1403.68 9.90973 1332.62L9.89658 1332.61L9.88338 1332.6C-61.9624 1261.58 -97.0546 1176.2 -97.0546 1075.78C-97.0546 975.781 -62.3934 888.261 7.2998 812.74C76.5662 737.68 180.598 686.374 320.749 660.277L386.095 658.47C394.561 658.236 401.302 651.306 401.302 642.837V569.699C401.302 561.081 394.359 554.173 385.862 554.047C330.332 553.221 284.258 545.55 248.167 531.458L248.144 531.449L248.122 531.441C211.075 517.156 169.796 487.236 124.858 439.155L124.838 439.134L124.819 439.114C81.1978 392.909 59.2639 338.114 59.2639 274.175C59.2639 209.882 82.0744 155.687 127.005 110.97C172.438 66.2384 226.946 43.9878 290.656 43.9878C354.912 43.9878 408.924 65.7897 454.327 110.502L454.343 110.517L454.359 110.533C479.005 134.611 496.299 161.159 507.981 189.849L518.328 185.636L507.981 189.849C511.179 197.701 520.161 201.766 528.285 198.553L599.107 170.541C606.717 167.53 610.854 159.045 608.162 151.073C593.586 107.91 568.459 69.6872 532.698 35.0678C465.94 -30.8363 385.224 -64.171 291.146 -64.171C197.077 -64.171 115.821 -30.8389 49.5097 35.6395C-16.7434 101.57 -50.3028 181.44 -50.3028 273.688C-50.3028 366.402 -25.2146 441.108 26.7204 495.878C67.6449 539.882 108.6 573.014 149.359 594.874C62.254 627.396 -10.6003 674.078 -67.3697 735.108C-158.45 831.232 -204.171 944.635 -204.171 1074.32C-204.171 1204.54 -157.91 1316.13 -65.6324 1407.95L-65.6217 1407.96L-65.6109 1407.97C27.1284 1499.75 138.735 1545.77 269.095 1545.77C399.031 1545.77 510.643 1498.72 602.863 1406.46C657.901 1351.69 697.299 1289.74 719.89 1221.08C734.102 1219.98 748.483 1217.16 762.946 1213.35L762.991 1213.34L763.035 1213.33C823.105 1196.98 868.732 1162.01 898.191 1109.11C918.155 1074.94 928.571 1039.41 928.571 1001.66C928.571 982.446 925.444 962.483 920.394 942.38L920.358 942.237L920.318 942.094C903.847 883.196 868.643 838.349 815.102 808.61C780.722 788.716 745.024 778.877 708.648 778.877C690.042 778.877 672.485 781.626 654.835 786.148C647.793 787.952 643.044 794.335 643.124 801.443L643.999 878.454C644.117 888.824 653.959 895.946 663.64 893.461C679.638 889.354 693.707 887.523 707.669 887.523C728.348 887.523 746.995 892.42 763.348 901.636C790.805 917.785 808.901 940.762 816.915 970.352C819.727 981.562 821.454 991.757 821.454 1001.66C821.454 1019.94 816.218 1038.55 805.743 1057.13C790.096 1084.69 767.091 1102.34 736.078 1110.84L736.055 1110.84L736.032 1110.85C724.786 1113.98 714.035 1115.32 703.748 1115.32C685.15 1115.32 666.52 1110.48 649.128 1100.27L648.949 1100.17L648.766 1100.07C632.054 1091.08 605.629 1070.13 568.471 1036.09C526.811 992.711 492.123 962.989 464.63 948.004C436.219 932.081 406.443 923.693 375.921 923.693C359.575 923.693 342.415 926.309 325.475 930.905C276.948 943.892 240.304 972.632 214.396 1016.46L214.321 1016.58L214.25 1016.71C198.333 1045.32 189.32 1074.97 189.32 1105.52C189.32 1121.31 191.95 1137.93 197.083 1154.86C209.589 1203.37 236.903 1239.58 278.923 1262.57L278.93 1262.58C305.367 1277.02 332.184 1284.42 360.24 1284.42C376.541 1284.42 392.241 1282.11 408.502 1278.02C414.892 1276.42 419.483 1271.01 420.193 1264.61L428.048 1193.83C429.171 1183.72 420.551 1175.39 410.636 1176.55C398.195 1178 387.562 1178.7 377.391 1178.7C357.435 1178.7 342.308 1175.46 332.216 1170.29C316.008 1161.13 305.101 1147.15 299.475 1126.48L299.443 1126.36L299.409 1126.25C297.172 1118.68 295.947 1111.48 295.947 1105.03C295.947 1093.1 299.217 1080.99 306.994 1068.52L307.102 1068.35L307.203 1068.18C317.579 1050.11 332.354 1037.99 352.755 1032.47C359.655 1030.76 367.037 1029.9 373.96 1029.9C386.563 1029.9 398.94 1033.22 411.707 1040.22ZM321.261 660.181C321.258 660.182 321.254 660.183 321.25 660.183C321.254 660.183 321.258 660.182 321.261 660.181Z'
                stroke='#3E66DF'
                strokeWidth={22.3421}
              />
            </g>
          </svg>
        </div>
      </section>
      <Clients />
      <LetsConnect />
    </Layout>
  );
};

export default AboutUs;
