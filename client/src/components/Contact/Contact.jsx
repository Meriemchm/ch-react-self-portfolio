"use client";

import { MdConnectWithoutContact } from "react-icons/md";
import { Links } from "../../Data/Links";
import { FormItem } from "../../Data/FormItem";
import Title from "../ui/Title";
import Button from "../ui/Button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../schemas/contactSchema";

const Contact = () => {
  const inputItem = FormItem.filter((item) => item.categorie === "input");
  const areaItem = FormItem.filter((item) => item.categorie === "textarea");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    await fetch("https://formspree.io/f/xojpavnj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="w-full min-h-screen flex items-center mx-auto bg-six py-8 relative">
      <div className="flex flex-col md:flex-row p-4 max-w-screen-lg mx-auto h-full w-full">
        <div className="flex flex-col md:w-1/2">
          <Title
            icon={<MdConnectWithoutContact size={40} className="text-white" />}
            title="Contact"
            description="You can Contact me here."
          />
          <div className="mt-4">
            <ul className="flex flex-wrap gap-4">
              {Links.map(({ id, mobile, href, download }) => (
                <li key={id} className="hover:scale-105 duration-200">
                  <a
                    href={href ? href : "/"}
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-sm sm:text-base"
                  >
                    {mobile}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full flex md:flex-1 mt-8 md:mt-0 flex-col justify-center items-center gap-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md bg-gradient-to-b from-primary/35 to-second rounded-xl p-8 shadow-2xl flex flex-col gap-6"
          >
            <h3 className="hidden md:block text-center text-white text-xl font-semibold tracking-widest">
              GET IN TOUCH
            </h3>

            {inputItem.map((item) => (
              <div key={item.id} className="w-full">
                <input
                  type={item.type}
                  placeholder={item.placeholder}
                  {...register(item.name)}
                  className="bg-transparent w-full border-b border-white/80 py-2 text-white placeholder-white/80 focus:outline-none focus:border-white"
                />
                {errors[item.name] && (
                  <p className="text-red-400 text-sm">
                    {errors[item.name]?.message}
                  </p>
                )}
              </div>
            ))}

            {areaItem.map((item) => (
              <div key={item.id} className="w-full">
                <textarea
                  rows={4}
                  placeholder={item.placeholder}
                  {...register(item.name)}
                  className="bg-transparent w-full border-b border-white/80 py-2 text-white placeholder-white/80 resize-none focus:outline-none focus:border-white"
                />
                {errors[item.name] && (
                  <p className="text-red-400 text-sm">
                    {errors[item.name]?.message}
                  </p>
                )}
              </div>
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
