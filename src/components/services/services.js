import axios from "axios";
import Chart from 'chart.js/auto';
const API_URL = process.env.API_URL;

export const createHeaders = () => {
  const headers = {
    'Accept': 'application/json'
  }
  return headers;
}

export const getBatalla = async () => {
  try {
    const headers = createHeaders();
    const url = `${API_URL}`;
    const { data } = await axios.get(url, { headers });
    return data;
  } catch (error) {
    console.error('getBatalla:', error);
    return error;
  }
}

export const getSensorById = async (id) => {
  try {
    const headers = createHeaders();
    const url = `${API_URL}/${id}`;
    const { data } = await axios.get(url, { headers });
    return data;
  } catch (error) {
    console.error('getSensorById: Error', error.response.status);
    return error.response.status;
  }
}

export const chartSensor = (sensorId, sensorInfo) => {
  const ctx = document.getElementById('SensorChart');
  const labels = sensorInfo.map(item => item.type);
  const data = sensorInfo.map(item => item.magto);
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: `Sensor: ${sensorId}`,
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgb(255, 99, 132)'],
        borderWidth: 1
      }],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      layout: {
        padding: {
          left: 25,
          right: 25,
        },
      },
    }
  });
}
