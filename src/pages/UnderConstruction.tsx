import { motion } from "framer-motion";
import { Wrench, Mail, Phone } from "lucide-react";
import logoIma from "@/assets/logo-ima.png";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gold/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-white/5 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "10%", right: "5%" }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-gold/15 blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "50%", right: "20%" }}
        />

        {/* Geometric shapes */}
        <motion.div
          className="absolute w-20 h-20 border-2 border-gold/20 rotate-45"
          animate={{ rotate: [45, 135, 45] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ top: "20%", right: "15%" }}
        />
        <motion.div
          className="absolute w-12 h-12 border-2 border-white/10 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "30%", left: "20%" }}
        />
        <motion.div
          className="absolute w-16 h-16 border border-gold/30"
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ top: "60%", left: "10%" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src={logoIma}
            alt="IMA Logo"
            className="w-32 h-32 mx-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
          />
        </motion.div>

        {/* Construction icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <Wrench className="w-16 h-16 text-gold mx-auto" />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Em <span className="text-gold">Construção</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/80 mb-8"
        >
          Estamos a preparar algo incrível para ti!
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-md mx-auto mb-12"
        >
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold to-gold/70 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "65%" }}
              transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
            />
          </div>
          <p className="text-white/60 text-sm mt-2">65% concluído</p>
        </motion.div>

        {/* Contact section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Entra em <span className="text-gold">Contacto</span>
          </h2>
          
          <a
            href="mailto:movementacademy.geral@gmail.com"
            className="inline-flex items-center gap-3 text-lg text-white hover:text-gold transition-colors duration-300"
          >
            <Mail className="w-6 h-6" />
            movementacademy.geral@gmail.com
          </a>
          <br />
          <a
            href="tel:+351916799225"
            className="inline-flex items-center gap-3 text-lg text-white hover:text-gold transition-colors duration-300"
          >
            <Phone className="w-6 h-6" />
            916 799 225
          </a>
        </motion.div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-white/50 text-sm mt-8"
        >
          © 2025 IMA - Intuitive Movement Academy - Associação Desportiva
        </motion.p>
      </div>
    </div>
  );
};

export default UnderConstruction;
