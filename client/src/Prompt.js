import React from 'react'
import { useState } from 'react';
import OpenAI from 'openai';


const openai = new OpenAI({
  organization: "org-xmdyiG4AtYsl41ITIQqSjN5E",
  project: "proj_xYckHWJSByertgcprbhLuela",
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
})


const Prompt = (images) => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e, message) => {
    e.preventDefault();

    setIsTyping(true);
    let msgs = chats;
    msgs.push({role:"user", content: message});
    window.scrollTo(0,1e10)
    setChats(msgs);
    setMessage("");

    await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You help answer questions about drone image data. The first image is of a geyser and steam, latitude 44.4280° N, longitude 110.5885° W, altitude 50 meters, heading degree 270, file name YNP_001.jpg, camera tilt degree -15, focal length 24mm, iso 100, shutter speed 1/500, aperture f/2.8, color temp 5600k, image format RAW+JPEG, file size 25.4mb, drone speed 5.2 meters per second, battery level 98 percent, gps accuracy .5m, gimbal mode follow, subject detection yes. The second image is of a river in a forest, latitude 44.4279° N, longitude 110.5890° W, altitude 75 meters, heading degree 180, file name YNP_002.jpg, camera tilt degree -30, focal length 35mm, iso 200, shutter speed 1/1000, aperture f/4, color temp 5200k, image format RAW+JPEG, file size 27.1mb, drone speed 3.8 meters per second, battery level 95 percent, gps accuracy .6m, gimbal mode: free, subject detection: no. The third image is of wildlife and elk, latitude 44.4275° N, longitude 110.5888° W, altitude 100 meters, heading degree 90, file name YNP_003.jpg, camera tilt degree 0, focal length 50mm, iso 400, shutter speed 1/2000, aperture f/5.6, color temp 5800k, image format RAW+JPEG, file size 26.8mb, drone speed 2.5 meters per second, battery level 91 percent, gps accuracy .4m, gimbal mode: tripod, subject detection: yes. The fourth image is of a canyon and a waterfall, latitude 44.4277° N, longitude 110.5882° W, altitude 120 meters, heading degree 0, file name YNP_004.jpg, camera tilt degree -45, focal length 70mm, iso 800, shutter speed 1/4000, aperture f/8, color temp 6000k, image format RAW+JPEG, file size 28.3mb, drone speed 1.2 meters per second, battery level 87 percent, gps accuracy .7m, gimbal mode: follow, subjecct detection: no. The fifth image is of a thermal pool and bacteria, latitude 44.4282° N, longitude 110.5879° W, altitude 80 meters, heading degree 315, file name YNP_005.jpg, camera tilt degree -10, focal length 24mm, iso 100, shutter speed 1/250, aperture f/2.8, color temp 5400k, image format RAW+JPEG, file size 24.9mb, drone speed 6.7 meters per second, battery level 82 percent, gps accuracy .5m, gimbal mode: free, subject detection: yes."
        },
        ...chats,
      ],
    }).then(r => {
      // console.log(r)
      msgs.push(r.choices[0].message);
      setChats(msgs);
      setIsTyping(false);
      window.scrollTo(0,1e10)
    }).catch(error => console.log(error))
  };


  return (
    <div>
      <h2>
        ChatGPT App
      </h2>

      <section>
        {
          chats && chats.length ? (
            chats.map((chat, index) => {
              return (
                <p key={index} className={chat.role === "user" ? "user_msg" : ""} >
                  <span>{chat.role}</span>
                  <span>:  </span>
                  <span>{chat.content}</span>
                </p>)
            })
          ) : ""
        }
      </section>

      <div className={ isTyping ? "": "hide"} >
        <p>
          <i>Thinking...</i>
        </p>
      </div>


      <form onSubmit={e => chat(e, message)}>
        <input 
          type="text"
          name="message"
          value={message}
          placeholder="Type a message and hit enter" 
          onChange={e => setMessage(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Prompt