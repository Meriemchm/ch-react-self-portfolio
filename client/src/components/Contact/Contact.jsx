import { MdConnectWithoutContact } from "react-icons/md";
import { Links } from "../../Data/Links";
import { FormItem } from "../../Data/FormItem";
import Title from "../ui/Title";
import Button from "../ui/Button";

const Contact = () => {
  const inputItem = FormItem.filter((item) => item.categorie === "input");
  const areaItem = FormItem.filter((item) => item.categorie === "textarea");

  return (
    <div name="contact" className="w-full min-h-screen flex items-center mx-auto bg-six py-8 relative">
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
          className="flex md:flex-1 mt-8 md:mt-0 flex-col justify-center items-center gap-4 relative"
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
            className="relative z-10 flex flex-col w-full gap-4"
          >
            {inputItem.map((item, id) => (
              <input
                key={id}
                type={item.type}
                name={item.name}
                autoComplete="off"
                required
                placeholder={item.placeholder}
                className="p-3 bg-transparent border border-gray-400 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none"
              />
            ))}

            {areaItem.map((item, id) => (
              <textarea
                key={id}
                name={item.name}
                placeholder={item.placeholder}
                rows="8"
                autoComplete="off"
                required
                className="resize-none p-3 bg-transparent border border-gray-400 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none"
              ></textarea>
            ))}

            <Button className="bg-black text-white">Contact me</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
