import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { DATA } from '@/data/portfolioData';
import styles from './Contact.module.css';

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Opens mail client with pre-filled email
    const mailtoLink = `mailto:${DATA.contact.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className={styles.grid}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Let's Connect!</h3>
            <p className={styles.infoText}>
              I'm actively seeking internship and placement opportunities. Whether you have a question, 
              want to discuss a project, or just want to say hi — I'd love to hear from you!
            </p>
            
            <div className={styles.contactDetails}>
              <a href={`mailto:${DATA.contact.email}`} className={styles.contactItem}>
                <Mail size={20} />
                <span>{DATA.contact.email}</span>
              </a>
            </div>
            
            <div className={styles.socials}>
              <h4 className={styles.socialsTitle}>Find me on</h4>
              <div className="social-links">
                <a 
                  href={DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin />
                </a>
                <a 
                  href={DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub Profile"
                >
                  <Github />
                </a>
                <a 
                  href={DATA.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Twitter Profile"
                >
                  <Twitter />
                </a>
                <a 
                  href={DATA.socials.reddit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Reddit Profile"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                className={styles.input}
                placeholder="Your name"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className={styles.input}
                placeholder="your@email.com"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows={5}
                className={styles.textarea}
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            
            <button type="submit" className="btn btn-primary btn-lg">
              <Mail size={18} />
              Send Message
            </button>
            
            {/* 
              To enable EmailJS form submission:
              1. Sign up at https://www.emailjs.com/
              2. Install: npm install @emailjs/browser
              3. Replace the handleSubmit with:
              
              import emailjs from '@emailjs/browser';
              
              const handleSubmit = async (e) => {
                e.preventDefault();
                try {
                  await emailjs.sendForm(
                    'YOUR_SERVICE_ID',
                    'YOUR_TEMPLATE_ID',
                    e.currentTarget,
                    'YOUR_PUBLIC_KEY'
                  );
                  alert('Message sent successfully!');
                } catch (error) {
                  alert('Failed to send message');
                }
              };
            */}
          </form>
        </div>
      </div>
    </section>
  );
}
