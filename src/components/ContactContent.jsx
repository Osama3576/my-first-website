/* eslint-disable react/no-unescaped-entities */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import styles from './ContactContent.module.css';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { createContact } from '../services/apiContact';
function ContactContent() {
  const queryClient = useQueryClient();
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobilenumber, setNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { mutate, isLoading } = useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      toast.success('Contact Form sucessfully submitted');
      queryClient.invalidateQueries({
        queryKey: ['contact'],
      });
    },
    onError: error => {
      toast.error(error.message);
    },
  });
  const handleSubmit = function (e) {
    e.preventDefault();
    const contactData = {
      fullname,
      email,
      mobilenumber,
      subject,
      message,
    };
    mutate(contactData);
    setFullName('');
    setEmail('');
    setSubject('');
    setNumber('');
    setMessage('');
  };
  return (
    <div className={styles.main_con}>
      <section className={styles.contact} id="contact">
        <h2 className={styles.about_heading}>
          Contact <span>Me!</span>
        </h2>

        <form onSubmit={handleSubmit} action="#">
          <div className={styles.input_box}>
            <div className={styles.input_field}>
              <input
                value={fullname}
                onChange={e => setFullName(e.target.value)}
                type="text"
                placeholder="Full Name"
                required
              />
              <span className={styles.focus}></span>
            </div>
            <div className={styles.input_field}>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="Email Adress"
                required
              />
              <span className={styles.focus}></span>
            </div>
          </div>
          <div className={styles.input_box}>
            <div className={styles.input_field}>
              <input
                value={mobilenumber}
                onChange={e => setNumber(e.target.value)}
                type="number"
                placeholder="Mobile Number"
                required
              />
              <span className={styles.focus}></span>
            </div>
            <div className={styles.input_field}>
              <input
                value={subject}
                onChange={e => setSubject(e.target.value)}
                type="text"
                placeholder="Email Subject"
                required
              />
              <span className={styles.focus}></span>
            </div>
          </div>

          <div className={styles.textarea_field}>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              name="message"
              cols="30"
              rows="10"
              placeholder="Your message"
              required
            ></textarea>
            {/* <span className={styles.focus}></span> */}
          </div>

          <div className={`${styles.btn_box} btns`}>
            <button className={styles.btn} disabled={isLoading}>
              Submit
            </button>
          </div>
        </form>
      </section>
      <div className={styles.para_con}>
        <h1>Let's talk about everything.</h1>
        <p>
          We would love to hear from you! At "Code&Iweb", we value your
          feedback, inquiries, and collaboration opportunities. Please don't
          hesitate to reach out to us using the contact form.
        </p>
      </div>
    </div>
  );
}

export default ContactContent;
