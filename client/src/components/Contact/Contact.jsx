import { MdConnectWithoutContact } from "react-icons/md";
import { Links } from "../../Data/Links";
import { FormItem } from "../../Data/FormItem";
import Title from "../ui/Title";
import Button from "../ui/Button";

const Contact = () => {
  const inputItem = FormItem.filter((item) => item.categorie === "input");
  const areaItem = FormItem.filter((item) => item.categorie === "textarea");

  return (
    <div
      name="contact"
      className="w-full min-h-screen flex items-center mx-auto bg-six py-8 relative"
    >
      <div className="flex flex-col md:flex-row p-4 max-w-screen-lg mx-auto h-full w-full">
        {/* first section */}
        <div className="flex flex-col md:w-1/2" data-aos="fade-up">
          <Title
            icon={<MdConnectWithoutContact size={40} className="text-white" />}
            title="Contact"
            description="You can Contact me here."
          />
          <div data-aos="fade-up" className="mt-4">
            <ul className="flex flex-wrap gap-4">
              {Links.map(({ id, mobile, href, download }) => (
                <li key={id} className="hover:scale-105 duration-200">
                  <a
                    href={href ? href : "/"}
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-sm sm:text-base "
                  >
                    {mobile}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* second section */}
        <div
          data-aos="fade-up"
          className="flex md:flex-1  mt-8 md:mt-0 flex-col justify-center items-center gap-4 relative"
        >
          {/* Fleur arrière-plan
          <img
            src={flower}
            alt="flower-icon"
            className="hidden md:flex absolute bottom-0 right-0 z-0 opacity-80 pointer-events-none"
          /> */}

          {/* Form */}
          <form
            action="https://getform.io/f/c32b25bc-8fbe-4a27-b89c-9bea5bcf16be"
            method="POST"
            className="w-full max-w-md bg-gradient-to-b from-primary/35 to-second rounded-xl p-8 shadow-2xl flex flex-col gap-6"
          >
            <h3 className="hidden md:block text-center text-white text-xl font-semibold tracking-widest">
              GET IN TOUCH
            </h3>

            {inputItem.map((item, id) => (
              <input
                key={id}
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                required
                className="
  bg-transparent
  border-b border-white/80
  py-2
  text-white
  placeholder-white/80
  focus:outline-none
  focus:border-white
  focus:bg-transparent
  autofill:bg-transparent
"
              />
            ))}

            {areaItem.map((item, id) => (
              <textarea
                key={id}
                name={item.name}
                placeholder={item.placeholder}
                rows="4"
                required
                className="bg-transparent border-b border-white/80 py-2 text-white placeholder-white/80 resize-none focus:outline-none focus:border-white transition"
              />
            ))}

            <button
              type="submit"
              className="mt-6 self-center px-8 py-2 rounded-full bg-transparent border border-white text-white hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
