import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Analysis from "../assets/Analysis.png";
import { Bar } from "react-chartjs-2";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import "chart.js/auto";
import Footer from "../components/Footer";

const AnalysisPage=()=> {
  const [text, setText] = useState("");
  const [chartData, setChartData] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: true,
          drawBorder: false,
          borderDash: [3, 3],
          color: "pink",
        },
        ticks: {
          beginAtZero: true,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
          color: "transparent",
          zeroLineColor: "transparent",
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "https://sentiment-analysis-backend-2-jmtz.onrender.com/api/textSubmission",
        { text },
        {
          withCredentials: true,
        }
      );

      const { sentiment_score, sentiment_label } = response.data;

      let description = "";
      if (sentiment_label === "positive") {
        description =
          "Overall sentiment- Positive - The text conveys a positive sentiment.";
      } else if (sentiment_label === "negative") {
        description =
          "Overall sentiment- Negative - The text conveys a negative sentiment.";
      } else {
        description =
          "Overall sentiment- Neutral - The text does not convey a strongly positive or negative sentiment.";
      }

      const updatedData = {
        labels: ["-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "sentiment analysis",
            data: [],
            backgroundColor: "purple",
          },
        ],
      };

      const scoreIndex = Math.min(Math.max(sentiment_score + 5, 0), 10);

      updatedData.datasets[0].data[scoreIndex] = 1;
      updatedData.datasets[0].yAxisID = "sentimentAxis";

      setDescription(description);
      setChartData(updatedData);
    } catch (error) {
      console.error("Error submitting text:", error);
   
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="text-center mt-16 mx-auto max-w-full mb-12 h-full">
        <h1 className="text-5xl text-pink-700">
          <b> Analyze With Us </b>
        </h1>

<h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center mt-8 sm:mt-16 text-content mx-4 sm:mx-6 md:mx-12 lg:mx-32">
  <b>Peek Inside the Minds: </b>Where Words Speak Louder Than Text.
  <br className=" sm:mb-8 md:mb-6 lg:mb-4" />
  <b>Explore our analysis page</b> for a journey into the heart of sentiments.
</h1>

</div>

      <div className="flex justify-center">
        <img
          src={Analysis}
          className="w-full lg:w-1/2 h-auto px-4 align-middle rounded-lg"
          alt="Analysis"
        />
      </div>
      <input
  type="text"
  value={text}
  onChange={(e) => setText(e.target.value)}
  className="mt-8 sm:mt-8 md:mt-12 lg:mt-16 mx-auto block w-2/3 sm:w-1/2 h-32 px-3 py-2 border-4 border-pink-700 rounded-md shadow-lg shadow-indigo-500/50 bg-blend-difference placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 lg:text-2xl sm:text-sm sm:text-center"
  placeholder="Enter your text here..."
/>






      <button
        onClick={handleSubmit}
        className="text-xl mt-8 mb-16 mx-auto w-48 flex justify-center items-center cursor-pointer py-2 px-4 border border-transparent rounded-full shadow-sm  font-medium text-white bg-gradient-to-r from-pink-500 to-content hover:from-pink-600 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {/* Loader component */}
      {loading && (
        <div className="flex justify-center items-center mt-4">
          <ClipLoader color={"#7e4a84"} loading={loading} size={35} />
        </div>
      )}
{chartData && (
  <div className="flex flex-col justify-center items-center">
    <Bar
      width="700"
      height="530"
      data={chartData}
      options={options}
      className="mt-8 sm:mt-12 mx-auto block w-full max-w-lg h-auto px-3 py-2 shadow-lg shadow-indigo-500/50 bg-blend-difference placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 text-lg sm:text-base sm:flex justify-center"
    />
    {description && (
      <p className="text-2xl pt-8 pb-8 text-center mt-8 mb-8 sm:mb-8 text-content">
        <b>Description:</b> {description}
      </p>
    )}
  </div>
)}

      <Footer />
    </div>
  );
}

export default AnalysisPage;
