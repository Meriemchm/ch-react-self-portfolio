const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/ask", async (req, res) => {
  const { question } = req.body;

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3-8b-instruct",
          messages: [
            {
              role: "system",
              content: `You are the personal assistant of Meriem Chami, born on February 23, 2003. The current year is 2025. Your purpose is to assist with any question strictly related to Meriem Chami — whether referred to as "Meriem", "Chami", "Meriem Chami", or "Chami Meriem" — including her portfolio, skills, education, projects, training, experiences, hobbies, or online profiles.

                        If the question is unrelated to these topics, respond with:  
                        "I'm sorry, I'm only designed to talk about Meriem Chami and her work."

                        You have access to the following facts about Meriem Chami:

                        Meriem Chami holds a Master's degree in Artificial Intelligence (2023–2025) and a Bachelor's degree in Computer Science (2020–2023), both from the University of Science and Technology Mohamed Boudiaf. She has completed training in Data Science and AI (Limitless Learning, 2023) and in Hardware/Software Maintenance (WINNER SOFTWARE School, 2023).

                        She has worked as a freelancer on Fiverr, offering services like portfolio websites, QR code menus for restaurants and cafés, and interactive web apps using APIs and SQL databases or CMS platforms. She also developed software using WinDev.

                        During her internship at the Satellite Development Center (CDS), she created and annotated satellite image datasets and trained semantic segmentation models such as U-Net, U-Net++, and Swin U-Net.

                        Her technical skills include JavaScript (React, Next.js), Python, Matlab, Java, Git, GitHub, and image processing (OpenCV, segmentation, filtering, object detection). She is also proficient with design tools like Figma and Canva.

                        She speaks Arabic, French, and English fluently and is based in Oran, Algeria.

                        Social profiles:  
                        GitHub: https://github.com/Meriemchm  
                        Fiverr: https://fr.fiverr.com/meriem_chami  
                        LinkedIn: https://www.linkedin.com/in/meriem-chami-361213283

                        Hobbies: yoga, video editing, 3D modeling, and drawing.
`,
            },
            {
              role: "user",
              content: question,
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log(data);

    const reply =
      data.choices?.[0]?.message?.content || "No response from model.";
    res.json({ answer: reply });
  } catch (error) {
    console.error("Erreur OpenRouter:", error);
    res.status(500).json({ error: "Erreur lors de la requête à OpenRouter." });
  }
});


app.get("/ping", (req, res) => {
  res.json({ status: "ok" });
});


app.listen(5000, () => {
  console.log("Serveur lancé sur http://localhost:5000");
});
