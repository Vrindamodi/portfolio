import os
import google.generativeai as genai
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

# --- Data Placeholder ---
# Replace this with your actual portfolio and resume data
PORTFOLIO_DATA = """
Vrinda Modi - Full Stack Developer & MCA Student

Summary:
I turn ideas into beautiful, interactive web experiences. Skilled in Java, SpringBoot, Python, Django, React, Node.js, and modern web tools, I craft clean, efficient code with a touch of creativity.

Currently pursuing my MCA, I thrive on learning, building, and solving challenges, whether it's a sleek front-end, a robust back-end, or an entire full-stack solution.

Beyond coding, I draw inspiration from music, nature, and volunteering, bringing curiosity and creativity to everything I do.

About:
 - My Coding Journey: Discovered my love for coding back in high school, what started as curiosity turned into a passion for crafting interactive, meaningful digital experiences. Now, as an MCA student, I'm building projects that merge creativity with real-world impact.
 - Robin Hood Army Volunteer: As a teaching volunteer with the Robin Hood Army, I help redistribute surplus food to those in need and teach kids essential skills. It's where compassion meets action, a reminder that small efforts create big change.
 - Tech Explorer: I love experimenting with new technologies, frameworks, and tools. From React to Node.js, I dive into anything that can make my projects smarter, faster, and more impactful. Clean, intuitive designs that delight users are my passion.
 - Problem Solver: Challenges excite me! I enjoy breaking down complex problems into actionable solutions, whether it's debugging tricky code or optimizing workflows. Every puzzle is an opportunity to learn.
 - Creative Soul: Beyond code, I find inspiration in music, art, and storytelling. Creativity keeps me balanced, and often fuels my approach to design and problem-solving.
 - Plant Enthusiast: I find peace and creativity in nurturing plants. Gardening teaches patience, attention to detail, and the joy of watching small things grow into something beautiful,  much like coding projects!
 - Achievement Hunter: I love setting goals and crushing them! Whether it's completing a challenging project, winning a hackathon, or learning a new skill,  every achievement fuels my drive to do more.
 - Animal Lover: Whether it's volunteering at shelters or simply caring for pets, animals inspire empathy, responsibility, and a love for all living beings. They remind me to stay grounded and compassionate.
 - Gamification & Fun: I enjoy creating small games, interactive apps, or playful experiments, because learning and coding should also be fun!
 - Vision Ahead: I aim to become a developer who blends technology with purpose, building solutions that are not just functional, but meaningful and impactful for real people.
 - Always Learning: Currently in my first year of MCA, diving deep into full-stack development and exploring new frameworks every day. Growth is my constant goal.
 
Socials:
 - Github: https://github.com/Vrindamodi
 - LinkedIn: https://www.linkedin.com/in/vrindamodii
 - X: https://x.com/Vrindamodii
 - Instagram: https://www.instagram.com/vrindamodi_/
 - Email: mailto:vrindamodi21@gmail.com
 - CodeChef: https://www.codechef.com/users/vrindamodi
 - LeetCode: https://leetcode.com/u/vrindamodi21/
 
Skills:
- Programming Languages: Java, Python, JavaScript, TypeScript, HTML, CSS.
- Frameworks & Libraries: Django, React, Node.js, Express.js, Angular.
- Databases: MongoDB, MySQL, PostgreSQL.
- Tools & Platforms: Git, AWS

Education:
 - Bachelor of Computer Applications (BCA) from IGNOU (Salesian College) (2022-2025). Built strong foundation in programming, database management, software engineering, and web development.
 - Master of Computer Applications (MCA) from IGNOU (2025-Present). Currently pursuing Master of Computer Applications with a focus on advanced software development, data structures, algorithms, and modern web technologies. Actively participating in hackathons and building innovative projects.

Experience:
 - (2019-2021) (Mumbai, Maharashtra) Volunteer Teacher - Taught underprivileged children as a volunteer educator, helping them with their studies and building their confidence. Made education accessible and fun for students from disadvantaged backgrounds.
 - (2025-Present) Freelance Full Stack Developer - Building custom web applications for clients worldwide, specializing in React, Node.js, Express, MongoDB, and modern full-stack technologies. Delivering high-quality, scalable solutions tailored to client needs.
 - (2025-Present) Volunteer at Robin Hood Army - Actively volunteering to distribute surplus food from events and restaurants to hungry people in need. Contributing to reducing food waste while helping feed the underprivileged in the community.

Awards:
- Winner of Internal Smart India Hackathon at SIT Siliguri (2025). Won first place at the Internal Smart India Hackathon for innovative project and exceptional problem-solving skills. View award at https://www.instagram.com/p/DPEdhrOD6Cx/#.

Fun Facts:
 - Vrinda is 90 percent sugar.
 - Vrinda likes chips but not tomato lays
 - Vrinda hates Sushi and wants to sign a petition to ban it.
 - Vrinda likes Jagit Singh music.
 - Vrinda is a vegetarian.
 - Vrinda likes cat and brainrot reels.
"""

# --- Gemini API Configuration ---
api_key = os.getenv("GOOGLE_API_KEY")
if not api_key:
    raise ValueError("GOOGLE_API_KEY not found in .env file")

genai.configure(api_key=api_key)

# --- Safety Settings ---
safety_settings = [
    {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
]

# --- Generative Model ---
model = genai.GenerativeModel(
    model_name="gemini-2.5-flash",
    safety_settings=safety_settings,
    system_instruction=f"""
    You are Herb, a helpful assistant for Vrinda Modi's portfolio website.
    Your role is to answer questions about Vrinda's skills, experience, and projects based on the provided data.
    Be friendly, professional, and concise in your answers.

    Do not answer any questions that are not related to Vrinda's portfolio, resume, or professional background.
    If a user asks an inappropriate or irrelevant question, politely decline to answer.
    Do not engage in harmful, unethical, or offensive conversations.
    Do not say anything negative about Vrinda.

    Here is the data you should use to answer questions:
    ---
    {PORTFOLIO_DATA}
    ---
    """
)

# --- FastAPI App ---
app = FastAPI()

class ChatRequest(BaseModel):
    query: str

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        chat_session = model.start_chat(history=[])
        response = chat_session.send_message(request.query)
        return {"response": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def root():
    return {"message": "Chatbot API is running."}
