import style from "./contact.module.css";
import Image from "next/image";
const ContactPage = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image src="/contact.png" fill className={style.img}></Image>
      </div>
      <div className={style.formContainer}>
        <form action="" className={style.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phonenumber" />
          <textarea
            name=""
            id=""
            cols=""
            rows=""
            placeholder="enter your message"
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
