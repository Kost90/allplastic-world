/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        brightBlue: "#01C3FD",
      },
      backgroundColor: {
        body: "#000618",
        cardBg:"rgba(40, 100, 151, 0.27)",
      },
      zIndex: {
        blurZindex: "-1",
      },
      blur: {
        blurBg: "100px",
      },
      width:{
        "1250":"1250px",
        "1550":"1550px"
      },
      height:{
        "720":"720px",
        "920":"920px",
      },
      backgroundImage: {
        blur:
          "linear-gradient(138deg, rgb(1, 148, 254) 12.62%, rgba(1, 148, 254, 0) 49.8%)",
        btnBg: "linear-gradient(66deg, #00C3FD 25.98%, #0194FE 65.48%)",
      },
      fontSize: {
        h1Desk: "48px",
        h1Mob: "36px",
        h2Desk: "30px",
        h2Mob: "18px",
        h3Mob: "13px",
        h3Desk: "25px",
        pDesk: "18px",
        pMob: "13px",
        link:"16px",
      },
      borderColor:{
        btnBorderCol:"#3DBDF1",
        cardBorderCol:"rgba(0, 77, 244, 0)",
      },
    },
  },
  plugins: [],
};
