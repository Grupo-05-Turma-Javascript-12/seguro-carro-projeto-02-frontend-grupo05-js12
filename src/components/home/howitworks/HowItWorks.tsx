import React from 'react';

interface Step {
  id: string;
  title: string;
  desc: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    { id: "01.", title: "Escolha seu nível de proteção", desc: "Compare planos claros e selecione o nível ideal para seu perfil" },
    { id: "02.", title: "Personalize com coberturas extras", desc: "Adicione apenas coberturas que aumentam sua proteção real" },
    { id: "03.", title: "Simule e veja o preço na hora", desc: "Transparência imediata. Receba valores instantâneos, sem ligações ou burocracia" },
    { id: "04.", title: "Contrate 100% online", desc: "Envie documentos e finalize tudo em poucos minutos" },
    { id: "05.", title: "Receba sua apólice digital", desc: "Cobertura validade e documento disponível imediatamente" },
    { id: "06.", title: "Gerencie tudo pelo painel", desc: "Acompanhe pagamentos, coberturas e renovações em um só lugar" },
  ];

  return (
    <section style={styles.section}>
    
      <div style={styles.contentSide}>
        <div style={styles.textWrapper}>
          <header style={styles.header}>
            <h2 style={styles.mainTitle}>Como funciona?</h2>
            <p style={styles.subtitle}>Simples como deve ser</p>
          </header>

          <div style={styles.grid}>
            {steps.map((step) => (
              <div key={step.id} style={styles.stepItem}>
                <span style={styles.stepNumber}>{step.id}</span>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDescription}>{step.desc}</p>
                <div style={styles.divider}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div style={styles.imageSide}>
        <img 
          src="/lp-2.png" 
          alt="Atendimento" 
          style={styles.image}
        />
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#182435', 
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
  contentSide: {
    flex: '1.2', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 40px',
  },
  textWrapper: {
    maxWidth: '800px',
  },
  imageSide: {
    flex: '0.8', 
    display: 'block',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  header: {
    marginBottom: '50px',
  },
  mainTitle: {
    color: '#ffffff',
    fontSize: '42px',
    margin: '0 0 10px 0',
  },
  subtitle: {
    color: '#bbbec2',
    fontSize: '20px',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', 
    gap: '40px 30px',
  },
  stepItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  stepNumber: {
    color: '#ffffff',
    fontSize: '14px',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  stepTitle: {
    color: '#ffffff',
    fontSize: '17px',
    marginBottom: '10px',
    fontWeight: '600',
  },
  stepDescription: {
    color: '#f1f1f1',
    fontSize: '14px',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  divider: {
    height: '1px',
    backgroundColor: '#dadee4',
    width: '80%',
  },
};

export default HowItWorks;