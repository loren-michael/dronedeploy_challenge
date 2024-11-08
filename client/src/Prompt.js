import React from 'react'
import { useState } from 'react';
import OpenAI from 'openai';


const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
})


const Prompt = () => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e, message) => {
    e.preventDefault();

    setIsTyping(true);
    let msgs = chats;
    msgs.push({role:"user", content: message})
    setChats(msgs)
    setMessage("");

    await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are EbereGPT. You help with image data."
        },
        ...chats,
      ],
    }).then(r => {
      console.log(r)
      msgs.push(r.choices[0].message);
      setChats(msgs);
      setIsTyping(false);
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