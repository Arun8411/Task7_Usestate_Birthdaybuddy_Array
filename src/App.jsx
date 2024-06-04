import { useState } from 'react'
import './App.css'

const dummyImages = [
  "./Images/img_1.jpeg",
  "./Images/img_2.jpeg",
  "./Images/img_3.jpeg",
  "./Images/img_4.jpeg"
];


const dummyImagesBirthdays = [
  {
    avatarUrl: dummyImages[0],
    name: "Bertie Yates",
    age: "29 years",
  },
  {
    avatarUrl: dummyImages[1],
    name: "Hester Hogan",
    age: "32 years",
  },
  {
    avatarUrl: dummyImages[2],
    name: "Larry Little",
    age: "36 years",
  },
  {
    avatarUrl: dummyImages[3],
    name: "Larry Little",
    age: "36 years",
  },
];

function App() {
  const [list, setList] = useState(dummyImagesBirthdays);


  return (
    <>
       <h2> {list.length} Birthdays Today</h2>
      <section>
        {list.map((friend, i) => {
          const { avatarUrl, name, age } = friend;
          return (
            <article
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                gap: "20px",
              }}
            >
              <img
                style={{ borderRadius: "50%" }}
                width={80}
                height={80}
                src={avatarUrl}
                alt=""
              />
              <div>
                <h3>{name}</h3>
                <p>{age}</p>
              </div>
            </article>
          );
        })}
        <button
          onClick={() => {
            setList([]);
            // setList([...dummyImagesBirthdays, ...dummyImagesBirthdays.slice(0, 1)]);
          }}
        >
          Clear All
        </button>
      </section>

    </>
  )
}

export default App
