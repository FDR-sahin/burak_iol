import ab from '../assets/aboutlogo.png'
import { motion } from "framer-motion";




function About() {
  return (
    <div>
      <section className="bg-mustard-50 py-16">
        <motion.div
  className="container-custom text-center"
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <h1 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-800">
    Amader Golpo
  </h1>

  <p className="text-charcoal-400 mt-3 max-w-2xl mx-auto">
    Khati sorshe-r tel toiri kori, prakritik upay-e apnar shorir o
    chul-er jotno-r jonno.
  </p>
</motion.div>

      </section>

      {/* <section className="container-custom py-16 grid sm:grid-cols-2 gap-10 items-center">
        <img
          src={ab}
          alt="Sorshe khet"
          className="rounded-xl2 w-full object-cover aspect-[4/3]"
        />
        <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2 className="text-2xl font-display font-semibold text-charcoal-800">
    Kibhabe shuru hoyechilo
  </h2>

  <p className="text-charcoal-600 mt-4 leading-relaxed">
    Amader poribar gram-er purono protha onujayi sorshe theke tel
    toiri korto. Onek manush-er gay-er batha o chul porar shomossar
    jonno amra ei khati tel poriksha kore valo result peyechi. Ekhon
    amra ei prakritik somadhan shobar kachhe pouchhe dite chai.
  </p>

  <p className="text-charcoal-600 mt-4 leading-relaxed">
    Amader shob product khati sorshe theke toiri, kono mishuk
    rasayanik nei. Quality o customer-der bishshash amader kachhe
    sobchaite gurutto purno.
  </p>
</motion.div>
      </section> */}


<section className="container-custom py-16 grid sm:grid-cols-2 gap-10 items-center">
  
  <motion.img
    src={ab}
    alt="Sorshe khet"
    className="rounded-xl2 w-full object-cover aspect-[4/3]"
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  />

  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl font-display font-semibold text-charcoal-800">
      Kibhabe shuru hoyechilo
    </h2>

    <p className="text-charcoal-600 mt-4 leading-relaxed">
      Amader poribar gram-er purono protha onujayi sorshe theke tel
      toiri korto. Onek manush-er gay-er batha o chul porar shomossar
      jonno amra ei khati tel poriksha kore valo result peyechi.
    </p>

    <p className="text-charcoal-600 mt-4 leading-relaxed">
      Amader shob product khati sorshe theke toiri, kono mishuk
      rasayanik nei. Quality o customer-der bishshash amader kachhe
      sobchaite gurutto purno.
    </p>
  </motion.div>

</section>
      



      <section className="bg-white py-16">
        <div className="container-custom grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-display font-bold text-mustard-400">500+</p>
            <p className="text-charcoal-400 mt-1">Khushi Customer</p>
          </div>
          <div>
            <p className="text-3xl font-display font-bold text-mustard-400">100%</p>
            <p className="text-charcoal-400 mt-1">Khati Sorshe-r Tel</p>
          </div>
          <div>
            <p className="text-3xl font-display font-bold text-mustard-400">4.7★</p>
            <p className="text-charcoal-400 mt-1">Average Rating</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
