import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Analysis from '../assets/Analysis.png';
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import Footer from '../components/Footer';
function App() {
  const [text, setText] = useState('');
  const [chartData, setChartData] = useState(null);
  const [description, setDescription] = useState('');
  const options = {
    responsive: false,
    scales: {
      x: {
        grid: {
          display: true,
          drawBorder: false,
          borderDash: [3, 3],
          color: "pink",
        },
        ticks: {
          beginAtZero: true
        }
      },
      y: {
        display: false,
        grid: {
          display: false,
          color: "transparent",
          zeroLineColor: "transparent"
        },
        ticks: {
          beginAtZero: true
        }
      }
    }
  };
  
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/textSubmission', { text }, {
        withCredentials: true, 
      });
  
      const { sentiment_score, sentiment_label } = response.data;
  
      // Generate description based on sentiment score
      
      let description = '';
      if (sentiment_label === 'positive') {
        description = 'Overall sentiment- Positive - The text conveys a positive sentiment.';
      } else if (sentiment_label === 'negative') {
        description = 'Overall sentiment- Negative - The text conveys a negative sentiment.';
      } else {
        description = 'Overall sentiment- Neutral - The text does not convey a strongly positive or negative sentiment.';
      }
  
      // Dynamically update chart data based on sentiment scores and labels
      const updatedData = {
        labels: ["-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "sentiment analysis",
            data: [],
            backgroundColor: "purple"
          }
        ]
      };
  
      // Adjust the sentiment score within the range of labels
      const scoreIndex = Math.min(Math.max(sentiment_score + 5, 0), 10);
  
      // Set sentiment score at the appropriate index based on label
      updatedData.datasets[0].data[scoreIndex] = 1;
  
      // Set y-axis labels
      updatedData.datasets[0].yAxisID = 'sentimentAxis';
  
      // Set the description in state
      setDescription(description);
  
      setChartData(updatedData);
    } catch (error) {
      console.error('Error submitting text:', error);
    }
  };
  

  return (
    <div>
      <Header/>
      <h1 className="text-4xl text-center mt-16 text-content">
        <b>Peek Inside the Minds: </b>Where Words Speak <br /> Louder Than
        Text.<b>Explore our analysis page</b>
        <br /> for a journey into the heart of sentiments.
      </h1>
      <div className="flex justify-center mt-12">
        <img src={Analysis} className="w-1/2 h-auto px-4 align-middle rounded-lg " />
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="mt-16 mx-auto block w-5/6 h-32 px-3 py-2 border-4 border-pink-700 rounded-md shadow-lg shadow-indigo-500/50 bg-blend-difference placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-lg"
        placeholder="Enter your text here..."
      />
      <button
        onClick={handleSubmit}
        className="text-2xl mt-8 mx-auto w-1/4 flex justify-center items-center cursor-pointer py-2 px-4 border border-transparent rounded-full shadow-sm  font-medium text-white bg-gradient-to-r from-pink-500 to-content hover:from-pink-600 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Analyze
      </button>
      <div className='flex flex-col justify-center items-center h-screen'>
      {chartData && <Bar width="700" height="530" data={chartData} options={options} className=' mt-16 mx-auto block w-5/6 h-32 px-3 py-2 shadow-lg shadow-indigo-500/50 bg-blend-difference placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-lg' />}
      <p className='text-2xl text-center mt-16 text-white mb-16 border-2 border-white w-1/2 h-24 rounded-full bg-contentBackground flex justify-center items-center'>
  <b>Description: </b>{description}
</p>


      </div>
      <Footer/>
    </div>
  );
}

export default App;
