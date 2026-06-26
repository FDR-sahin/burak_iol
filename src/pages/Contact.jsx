import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getDatabase, ref, push, set,get, child, onValue } from "firebase/database";
import { app } from "../firebase";

const db = getDatabase(app);

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [mess, setMess] = useState('');


 
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!name || !phone || !address) {
      alert("Fill the input box");
      return;
    }

    setLoading(true);

    try {
      await push(ref(db, "users/details/"), {
        id: 1,
        name: name,
        phone: phone,
        address: address,
        date: new Date().toISOString(),
      });

      alert("Welcome user apnae massge ta amra peyesi");

      setName("");
      setPhone("");
      setAddress("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Data sent hosse na");
    } finally {
      setLoading(false);
    }
  };

//  useEffect(() => {
//   get(child(ref(db), "users/details"))
//     .then((snapshot) => {
//       console.log(snapshot.val());
//     });
// }, []);

//  useEffect(() => {
//   const starCountRef = ref(db, "users/details/-OvulgJONAlPhvLDAnPD");

//   onValue(starCountRef, (snapshot) => {
//     if (snapshot.exists()) {
//       setMess(snapshot.val());
//     }
//   });
// }, []);

  return (
    <div className="container-custom py-16">

      <motion.div
        className="text-center mb-12"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-800">
          Amader Shathe Jogajog Korun
        </h1>

        <p className="text-charcoal-400 mt-2">
          Kono proshno thakle amader message korun, amra tratari reply dibo
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Contact Info - Left Side */}
        <motion.div
          className="space-y-6"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-mustard-100 flex items-center justify-center flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="w-5 h-5 text-mustard-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5h4l2 5-2.5 1.5a11 11 0 0 0 5 5L13 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 7a2 2 0 0 1 2-2Z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-medium text-charcoal-800">
                Phone
              </h3>
              <p className="text-charcoal-400">+880 01323392363</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-mustard-100 flex items-center justify-center flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="w-5 h-5 text-mustard-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16v12H4V6Zm0 0 8 7 8-7"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-medium text-charcoal-800">
                Email
              </h3>
              <p className="text-charcoal-400">burakshofic@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-mustard-100 flex items-center justify-center flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="w-5 h-5 text-mustard-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z"
                />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-medium text-charcoal-800">
                Address
              </h3>
              <p className="text-charcoal-400">
                Bokshigonj, Jamalpur Sadar Upozela, Bangladesh, 2140
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/8801XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-medium px-5 py-3 rounded-full mt-2"
          >
            WhatsApp-e Message Koren
          </a>
        </motion.div>

        {/* Form - Right Side */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <label className="block text-sm font-medium text-charcoal-600 mb-1">
              Name
            </label>
            <input
              type="text"
              
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-charcoal-100 rounded-lg px-4 py-2.5 focus:outline-none focus:border-mustard-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-600 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-charcoal-100 rounded-lg px-4 py-2.5 focus:outline-none focus:border-mustard-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-600 mb-1">
              Apnar Message
            </label>
            <textarea
              
              required
              rows={4}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-charcoal-100 rounded-lg px-4 py-2.5 focus:outline-none focus:border-mustard-400"
            />
          </div>

          <button  disabled={loading} type="submit" className="btn-primary w-full">
           {loading ? "Pathano Hocche..." : "Message Pathan"}
          </button>
        </motion.form>

      </div>
    </div>
  );
}

export default Contact;
