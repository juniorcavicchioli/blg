// pages/index.js
import Menu from '@/components/Menu';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Image from 'next/image';

import duxus from '@/img/duxus.png';

const HomePage = () => {
  const paragraph = 'mb-3 text-lg text-justify text-gray-400 ';
  const h3 = 'text-xl font-bold dark:text-white pb-3.5 pt-5';
  return (
    <div>
      <Menu />
      <HeroSection />
      <div className='mx-auto mt-12 flex flex-wrap max-w-6xl items-center px-4'>
        <div className='w-full'>
          <h3 className={h3}>Quem sou eu?</h3>
          <p className={paragraph}>
            Minha identidade é moldada por impulsos inconscientes, desejos reprimidos e a influência da infância. Ao menos é isso que Sigmund Freud diz. Se levarmos em consideração uma abordagem behaviorista... ah, não é esse tipo de pergunta? Ficou ainda mais difícil de responder.
          </p>
          <p className={paragraph}>
            Falo com R retroflexo (<em>porrrrta!</em>), sou bem humorado e tenho o riso frouxo. É bem possível que me veja um dia aleatoriamente grunhindo como um porco enquanto dou risada. Sou natural de Jundiaí-SP, mas atualmente moro na amorosamente odiada metrópole paulista, São Paulo-SP.
          </p>
          <p className={paragraph}>
            Tenho me dedicado intensamente à programação nos últimos anos e estou me formando em análise e desenvolvimento de sistemas. Já que meu plano de ser um <em>power ranger</em> não deu certo, pretendo seguir carreira como desenvolvedor. Troquei meu traje vermelho por uma camisa e um suspensório e meu megazord por um computador.
          </p>
          <p className={paragraph}>
            Você queria algo mais direto e com menos humor? Serei mais direto, prometo. Mesmo que eu seja canhoto.
          </p>
        </div>

        <div className='w-full'>
          <h3 className={h3}>Carreira</h3>
          <p className={paragraph}>
            Atuo como desenvolvedor de software estagiário na <a href='https://www.linkedin.com/company/-lin-duxus-consulting/' target='_blank' className='text-blue-400 hover:text-blue-600 underline-offset-2 underline'>Élin Duxus</a> desde julho de 2023.
          </p>
          <div className='flex'>
            <p className={paragraph + ' w-3/4'}>
              Contribuo com a evolução e manutenção dos sistemas da empresa. Grande parte do meu aprendizado é prático. Programo principalmente em Java, usando frameworks como Vraptor e Spring no back-end. Para o front-end, utilizo Javascript, HTML, CSS e o framework Vue.js. Também utilizo a tecnologia JSP (JavaServer Pages) para criar telas no lado do servidor.
            </p>
            <Image
              src={duxus}
              alt="Élin Duxus Logo"
              className="mx-auto h-fit object-fill"
              loading="eager"
            />
          </div>
          <p className={paragraph}>
            Estou terminando minha faculdade de análise e desenvolvimento de sistemas na <a href='https://www.fiap.com.br/graduacao/tecnologo/analise-e-desenvolvimento-de-sistemas/' target='_blank' className='text-blue-400 hover:text-blue-600 underline-offset-2 underline'>FIAP</a>.
          </p>
        </div>

        <div className='w-full'>
          <h3 className={h3}>Atividades</h3>
          <ul className={'list-none ' + paragraph}>
            <li> ✍ Desenhista ruim nas horas vagas;</li>
            <li> 🧑‍💻 Programação;</li>
            <li> 🎮 Jogos;</li>
            <li> 📺 Sitcoms;</li>
            <li> 🎹 Pianista iniciante...</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
