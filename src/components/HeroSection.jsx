import Image from 'next/image';

import dev from '@/img/dev.jpg';

const HeroSection = () => {
  return (
    <section className="mx-auto mt-12 flex max-w-6xl flex-col items-center px-4 md:flex-row">
      <div className="flex flex-1 flex-col items-center md:items-start">
        <div className="inline-block rounded-md bg-bg-4 px-6 py-3 font-semibold">
          <span role="img">👋 </span>
          Olá, <span role="img">🌎</span>!
        </div>
        <div className="mt-6">
          <h1 className={`mf:text-6xl text-center text-5xl font-semibold leading-tight text-earth-2 md:text-left`}>
            Eu sou <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Junior</span>, um desenvolvedor de software!
          </h1>
        </div>
      </div>
      <div className="mt-20 flex-1 md:mt-0">
        <Image
          src={dev}
          placeholder="blur"
          alt="Junior Cavicchioli"
          className="mx-auto object-cover rounded-3xl"
          width={400}
          loading="eager"
        />
      </div>
    </section>
  );
};

export default HeroSection;